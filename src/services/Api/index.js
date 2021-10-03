import { request } from 'graphql-request'

const fetcher = (query) => request('https://api-eu-central-1.graphcms.com/v2/ckub3kb7z559001zecskddc7l/master', query)

export default fetcher
