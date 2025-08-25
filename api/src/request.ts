interface RequestOptions {
  headers?: Record<string, string>
  [key: string]: any
}

export class Request {
  public baseURL: string
  
  constructor(baseURL: string) {
    this.baseURL = baseURL
  }

  private buildURL(url: string, params?: Record<string, any>): string {
    const fullURL = url.startsWith('http') ? url : `${this.baseURL}${url}`
    
    if (!params) return fullURL
    
    const urlObj = new URL(fullURL)
    Object.keys(params).forEach(key => {
      if (params[key] !== undefined && params[key] !== null) {
        urlObj.searchParams.append(key, String(params[key]))
      }
    })
    
    return urlObj.toString()
  }

  private async request(
    url: string,
    options: RequestInit = {}
  ): Promise<Response> {
    const response = await fetch(url, options)
    return response
  }

  async get<T = any>(
    url: string,
    params?: Record<string, any>,
    options: RequestOptions = {}
  ): Promise<T> {
    const fullURL = this.buildURL(url, params)
    const { headers = {}, ...otherOptions } = options
    
    const response = await this.request(fullURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      ...otherOptions,
    })
    
    if (!response.ok) {
      throw new Error(`GET request failed: ${response.status} ${response.statusText}`)
    }
    
    return response.json()
  }

  async post<T = any>(
    url: string,
    body?: any,
    options: RequestOptions = {}
  ): Promise<T> {
    const fullURL = this.buildURL(url)
    const { headers = {}, ...otherOptions } = options
    
    const response = await this.request(fullURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
      ...otherOptions,
    })
    
    if (!response.ok) {
      throw new Error(`POST request failed: ${response.status} ${response.statusText}`)
    }
    
    return response.json()
  }

  async put<T = any>(
    url: string,
    body?: any,
    options: RequestOptions = {}
  ): Promise<T> {
    const fullURL = this.buildURL(url)
    const { headers = {}, ...otherOptions } = options
    
    const response = await this.request(fullURL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
      ...otherOptions,
    })
    
    if (!response.ok) {
      throw new Error(`PUT request failed: ${response.status} ${response.statusText}`)
    }
    
    return response.json()
  }

  async delete<T = any>(
    url: string,
    params?: Record<string, any>,
    options: RequestOptions = {}
  ): Promise<T> {
    const fullURL = this.buildURL(url, params)
    const { headers = {}, ...otherOptions } = options
    
    const response = await this.request(fullURL, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      ...otherOptions,
    })
    
    if (!response.ok) {
      throw new Error(`DELETE request failed: ${response.status} ${response.statusText}`)
    }
    
    return response.json()
  }
}

export const request = new Request('http://localhost:3000');