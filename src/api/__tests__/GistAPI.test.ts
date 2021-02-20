import { Octokit } from '@octokit/rest'
import { GistAPI } from '../GistAPI'

jest.mock('@octokit/rest')

const mockOctokitPaginate = jest.fn()
const mockOctokitGistsListForUser = jest.fn()
const mockOctokitGistsListForks = jest.fn(() => ({ data: [] }))

describe('GistAPI', () => {
  beforeAll(() => {
    Octokit.mockImplementation(() => ({
      paginate: mockOctokitPaginate,
      gists: {
        listForUser: mockOctokitGistsListForUser,
        listForks: mockOctokitGistsListForks,
      },
    }))
  })

  it('should call octokit.paginate with correct arguments on listForUser', async () => {
    await new GistAPI().listForUser('Yuri')

    expect(mockOctokitPaginate).toHaveBeenCalledWith(
      mockOctokitGistsListForUser,
      {
        username: 'Yuri',
      }
    )
  })

  it('should call octokit.gists.listForks with gist_id as params', async () => {
    await new GistAPI().listForks('1211')

    expect(mockOctokitGistsListForks).toHaveBeenCalledWith({
      gist_id: '1211',
    })
  })
})
