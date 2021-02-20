export type Fork = {
  username: string
  avatar: string
  url: string
}

export type Gist = {
  id: string
  tags: string[]
  url: string
  comments: number
  description: string | null
  forks: Fork[]
}
