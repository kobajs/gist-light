import { Gist } from './GistAPI.types'

import { Octokit } from '@octokit/rest'

// Gist docs: https://docs.github.com/en/rest/reference/gists
export class GistAPI {
  async listForUser(username: string) {
    try {
      const octokit = new Octokit()
      const userGistsResponse = await octokit.paginate(
        octokit.gists.listForUser,
        {
          username,
        }
      )
      return userGistsResponse
    } catch (e) {
      console.log(e)
      throw e
    }
  }

  async listForks(gist_id: string) {
    try {
      const octokit = new Octokit()
      const forksResponse = await octokit.gists.listForks({
        gist_id,
      })

      return forksResponse.data
    } catch (e) {
      console.log(e)
      throw e
    }
  }

  async searchByUser(username: string): Promise<Gist[]> {
    try {
      const gists: Gist[] = []
      const userGists = await this.listForUser(username)

      await Promise.all(
        userGists.map(async (ug) => {
          const forks = await this.listForks(ug.id)

          gists.push({
            id: ug.id,
            comments: ug.comments,
            description: ug.description,
            url: ug.html_url,
            forks: forks.map((fork) => ({
              avatar: fork.owner?.avatar_url || '',
              username: fork.owner?.login || '',
              url: fork.html_url || '',
            })),
            tags: Object.values(ug.files).reduce<string[]>(
              (prev, { language }) => {
                if (typeof language === 'string')
                  return [...prev, language as string]
                return prev
              },
              []
            ),
          })
        })
      )

      return gists
    } catch (e) {
      console.log(e)
      throw e
    }
  }
}
