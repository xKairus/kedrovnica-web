export interface ServiceStep {
  name: string
  duration?: string
}

export interface Service {
  id: number
  title: string
  price: number
  duration: number 
  description?: string
  steps: ServiceStep[]
  category: "spa" | "massage" | "correction" | "couple"
}
