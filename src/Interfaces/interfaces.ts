
export interface options {
    onIncrement: (e: string) => void
    options: string[]
}

export interface notification {
    message: string
}

export interface statistics {
     good: number
  neutral: number
  bad: number
  total: number
  positivePercentage: number
}

export interface title {
    title: string
    children: any
}