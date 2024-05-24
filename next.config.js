const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const nextConfig = {
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    SERPAPI_API_KEY: process.env.SERPAPI_API_KEY,
    SUPABASE_PRIVATE_KEY: process.env.SUPABASE_PRIVATE_KEY,
    SUPABASE_URL: process.env.SUPABASE_URL,
    LANGCHAIN_TRACING_V2: process.env.LANGCHAIN_TRACING_V2,
    LANGCHAIN_API_KEY: process.env.LANGCHAIN_API_KEY,
    LANGCHAIN_PROJECT: process.env.LANGCHAIN_PROJECT
  }
};
module.exports = withBundleAnalyzer(nextConfig)