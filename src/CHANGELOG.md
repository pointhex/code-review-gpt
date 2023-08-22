# Changelog

## [0.2.0](https://github.com/pointhex/code-review-gpt/compare/v0.1.0...v0.2.0) (2023-08-22)


### Features

* add back filter files in review ([3aee4f7](https://github.com/pointhex/code-review-gpt/commit/3aee4f76e3b3bcfd4cc485d40444402a6f738b42))
* add demo prompt for code snippet ([3bf76bf](https://github.com/pointhex/code-review-gpt/commit/3bf76bfb3bcdfd6e328c5e53d511a8c00aef253d))
* Added PHP to languageMap ([#110](https://github.com/pointhex/code-review-gpt/issues/110)) ([0de1790](https://github.com/pointhex/code-review-gpt/commit/0de17903b9e75d5a8cf1ca6c569b209371ccfb4e))
* ci commenting ([#2](https://github.com/pointhex/code-review-gpt/issues/2)) ([056b0f6](https://github.com/pointhex/code-review-gpt/commit/056b0f62350a1af97234febd9ee05b20afda2c2d))
* ci test ([#41](https://github.com/pointhex/code-review-gpt/issues/41)) ([4734ef1](https://github.com/pointhex/code-review-gpt/commit/4734ef1d89d09462b8bc257a1e8af9f5c044a15a))
* configure option ([#14](https://github.com/pointhex/code-review-gpt/issues/14)) ([937fcd0](https://github.com/pointhex/code-review-gpt/commit/937fcd0b57e8e247d4c452339ad30a7004eaaa37))
* create some abstraction in llms ([0a64bc4](https://github.com/pointhex/code-review-gpt/commit/0a64bc4e7ef66bc329b581ababed651aa1938f25))
* debug logging and logging logic in ci, local and debug mode ([#77](https://github.com/pointhex/code-review-gpt/issues/77)) ([a154cab](https://github.com/pointhex/code-review-gpt/commit/a154cab1ffcd858c3766b4f26aefcda968a5bfdc))
* docs on how to set up gitlab access token ([a9643f2](https://github.com/pointhex/code-review-gpt/commit/a9643f2b5b973597ca422273c2d3fc742b6c1758))
* **feedback:** limit the number of feedbacks to 5 feedbacks at most ([b52441d](https://github.com/pointhex/code-review-gpt/commit/b52441d5adf19523181b848805a7956efaeba510))
* gh action ([0be4bf1](https://github.com/pointhex/code-review-gpt/commit/0be4bf1cc455c9612c12fcde2910fafe32b10643))
* gh action ([6458144](https://github.com/pointhex/code-review-gpt/commit/64581442b0e9d755eba19b94516cc5eec08a3b70))
* init ([98990cb](https://github.com/pointhex/code-review-gpt/commit/98990cbf431d998c102a49e4839ac1b8476ac6a4))
* make review function return feedback ([c58fcee](https://github.com/pointhex/code-review-gpt/commit/c58fcee62942373f649b0a955a89716bd7560721))
* mask apiKey in prompt and add async functions ([cc95720](https://github.com/pointhex/code-review-gpt/commit/cc9572072751f0bb144c7b3eca486fadf3031193))
* move git commands in common folder out of review ([b4bd034](https://github.com/pointhex/code-review-gpt/commit/b4bd0343654b67b1ae9523e24f38721b1f927c14))
* pass OpenAIApiKey as a parameter in lambdas instead of taking from process.env ([ba47456](https://github.com/pointhex/code-review-gpt/commit/ba47456e0ef85ab1637233b545f77c679af5c537))
* remove dead cod and refactor ([506ced5](https://github.com/pointhex/code-review-gpt/commit/506ced57c266d0f33a1ea9618aaddf8692bee6a5))
* remove errors for no supported files ([347821e](https://github.com/pointhex/code-review-gpt/commit/347821e48c1e3e00e5be7a7bb7fedfcc1d65b879))
* signoff ([#6](https://github.com/pointhex/code-review-gpt/issues/6)) ([37c5daf](https://github.com/pointhex/code-review-gpt/commit/37c5daffd9c7f4f9fedefc9a7fc6936a6f5bad9c))
* split up prompts ([4e26f23](https://github.com/pointhex/code-review-gpt/commit/4e26f2381378fae7417a3849d2607035552239e8))
* **test:** add test command and implement code snippet generation ([1669305](https://github.com/pointhex/code-review-gpt/commit/1669305c79c3a3b6cbe452414640b9e3a2732f25))
* update comments ([#9](https://github.com/pointhex/code-review-gpt/issues/9)) ([c13c3fc](https://github.com/pointhex/code-review-gpt/commit/c13c3fc95245a65a3bb235efbef6b3ae22b52326))
* use tslog for logging ([4d287ff](https://github.com/pointhex/code-review-gpt/commit/4d287ff480e4da0535641523237454f8962b801e))


### Bug Fixes

* brackets in json ([58e4b6a](https://github.com/pointhex/code-review-gpt/commit/58e4b6a543210700c893d242b837ece08a4f2896))
* do not add file to prompt if only removed lines ([#174](https://github.com/pointhex/code-review-gpt/issues/174)) ([a33f49a](https://github.com/pointhex/code-review-gpt/commit/a33f49a11bcb42327ef66b13eb8046f967046492))
* do not send changedLines in prompt ([96475b3](https://github.com/pointhex/code-review-gpt/commit/96475b339729f0e56a5ad7f2e273cb4a17120305))
* exit when there is no file to review ([81097f1](https://github.com/pointhex/code-review-gpt/commit/81097f1f0b64618a3c51f90ec54d37178fdc8213))
* explicit exit code and return in review index ([9bb8140](https://github.com/pointhex/code-review-gpt/commit/9bb81400132a8c7c06057c559bdab3e1b354bf81))
* gitlab git command ([4f19728](https://github.com/pointhex/code-review-gpt/commit/4f19728c340a7ec072bd0a559ccd5167980ce9d3))
* gitlab support improvements ([#97](https://github.com/pointhex/code-review-gpt/issues/97)) ([a5c7d6b](https://github.com/pointhex/code-review-gpt/commit/a5c7d6be3d66cd179e7bfa10e3a4ef16351223ca))
* log type ([2a18fa6](https://github.com/pointhex/code-review-gpt/commit/2a18fa665572c9a89e7ce6119cf53c41b7ffd1fc))
* max prompt length per model ([#33](https://github.com/pointhex/code-review-gpt/issues/33)) ([fc45818](https://github.com/pointhex/code-review-gpt/commit/fc458188d5a5b97d7f1510f0bfccd4d608f7209e))
* openai_api_key ([915f806](https://github.com/pointhex/code-review-gpt/commit/915f8061e9de3c0312e4ffeaa0b3990633c6d15e))
* remove console.log ([e28d1e5](https://github.com/pointhex/code-review-gpt/commit/e28d1e57435a4b4687c8a0268eeaf3e884b01acf))
* remove unnecessary async in function ([fa9db17](https://github.com/pointhex/code-review-gpt/commit/fa9db170990fb799c0fffadbf9b37277685640f8))
* separate flags for review and configure ([5cb8b69](https://github.com/pointhex/code-review-gpt/commit/5cb8b6971ca0662fe791db5b904d2404fa63d0b7))
* use same format for all command and options formats ([3971793](https://github.com/pointhex/code-review-gpt/commit/3971793ceec305844f27080c7c93aebe6e0be76d))

## [0.1.0](https://github.com/mattzcarey/code-review-gpt/compare/v0.0.34...v0.1.0) (2023-08-16)


### Features

* add demo prompt for code snippet ([3bf76bf](https://github.com/mattzcarey/code-review-gpt/commit/3bf76bfb3bcdfd6e328c5e53d511a8c00aef253d))
* docs on how to set up gitlab access token ([a9643f2](https://github.com/mattzcarey/code-review-gpt/commit/a9643f2b5b973597ca422273c2d3fc742b6c1758))
* make review function return feedback ([c58fcee](https://github.com/mattzcarey/code-review-gpt/commit/c58fcee62942373f649b0a955a89716bd7560721))
* pass OpenAIApiKey as a parameter in lambdas instead of taking from process.env ([ba47456](https://github.com/mattzcarey/code-review-gpt/commit/ba47456e0ef85ab1637233b545f77c679af5c537))


### Bug Fixes

* do not add file to prompt if only removed lines ([#174](https://github.com/mattzcarey/code-review-gpt/issues/174)) ([a33f49a](https://github.com/mattzcarey/code-review-gpt/commit/a33f49a11bcb42327ef66b13eb8046f967046492))
