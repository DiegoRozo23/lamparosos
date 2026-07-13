const c = require("ansi-colors")

const requiredEnvs = [
  {
    key: "NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY",
    // TODO: we need a good doc to point this to
    description:
      "Learn how to create a publishable key: https://docs.medusajs.com/v2/resources/storefront-development/publishable-api-keys",
  },
]

function checkEnvVariables() {
  const missingEnvs = requiredEnvs.filter(function (env) {
    return !process.env[env.key]
  })

  if (missingEnvs.length > 0) {
    console.warn(
      c.yellow.bold("\n⚠️ Warning: Missing environment variables (Using mock data instead)\n")
    )

    missingEnvs.forEach(function (env) {
      console.warn(c.yellow(`  ${c.bold(env.key)}`))
    })

    console.warn(
      c.yellow(
        "\nProceeding with build...\n"
      )
    )

    // No process.exit(1) to allow Vercel build to succeed with mock data
  }
}

module.exports = checkEnvVariables
