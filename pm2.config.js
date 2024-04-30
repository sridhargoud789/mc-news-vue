module.exports = {
  apps : [{
    name   : "MundoCrypto News",
    script : "npm",
    args: "run start",
    watch: true,
    env_production: {
      PORT: 3000,
      NODE_ENV: "production"
    }}
  ]
}
