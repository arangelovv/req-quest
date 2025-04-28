export type method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

export const methodColors:Record<string, string> = {
    'GET': 'bg-green-200',
    'POST':'bg-blue-200',
    'PUT':'bg-yellow-200',
    'DELETE':'bg-red-200',
    'PATCH':'bg-orange-200'
}

export interface Request {
    requestId: number;
    requestName: string;
    requestMethod: method; 
}

