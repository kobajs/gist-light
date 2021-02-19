import { SearchParams, Gist } from './GistAPI.types'

import { Octokit } from '@octokit/rest'
const octokit = new Octokit()

// Gist docs: https://docs.github.com/en/rest/reference/gists
export class GistAPI {
  baseURL = 'https://api.github.com'

  private async listForUser(username: string) {
    try {
      const userGistsResponse = await octokit.gists.listForUser({
        username,
      })

      return userGistsResponse.data
    } catch (e) {
      console.log(e)
      throw e
    }
  }

  private async listForks(gist_id: string) {
    try {
      const forksResponse = await octokit.gists.listForks({
        gist_id,
      })

      return forksResponse.data
    } catch (e) {
      console.log(e)
      throw e
    }
  }

  async searchByUser(username: string, params?: SearchParams): Promise<Gist[]> {
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
