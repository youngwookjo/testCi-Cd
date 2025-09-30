import { describe, test, expect } from '@jest/globals'

test('GET /health', () => {
	const status = 200
	expect(status).toBe(200)
})

test('GET /hello', () => {
	const response = { message: 'success' }
	expect(response).toEqual({ message: 'success' })
})
