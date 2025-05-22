

## 1.12.0 (2025-05-22)


### Features

* **analytics:** add financial endpoint ([#579](https://github.com/domhhv/akash-network-console/issues/579)) ([92dc463](https://github.com/domhhv/akash-network-console/commit/92dc463d54629ef06d35798b9d4b347ab1ff4f92))
* **analytics:** integrates amplitude ([c88ff59](https://github.com/domhhv/akash-network-console/commit/c88ff59c19c0096916afa3774b2d15a1bd30d3eb))
* **auth:** implement verification email re-send and rework relevant UI ([#676](https://github.com/domhhv/akash-network-console/issues/676)) ([c2de6a6](https://github.com/domhhv/akash-network-console/commit/c2de6a6f92dbb44b1758836f2a42de8eb81f4c94)), closes [#663](https://github.com/domhhv/akash-network-console/issues/663)
* **billing:** add billing module with trial wallet creation ([d1ca550](https://github.com/domhhv/akash-network-console/commit/d1ca550ae3d94e08de15f2d329ed6f81d192653b)), closes [#247](https://github.com/domhhv/akash-network-console/issues/247)
* **billing:** implement managed wallet top up ([04f5aad](https://github.com/domhhv/akash-network-console/commit/04f5aad51079bea8c8d58c2147c78598b5bb409d)), closes [#247](https://github.com/domhhv/akash-network-console/issues/247)
* **console:** Add config from awesome akash for SSH toggle ([#301](https://github.com/domhhv/akash-network-console/issues/301)) ([8765a4f](https://github.com/domhhv/akash-network-console/commit/8765a4fe5123c868bacfa9c59cd0b6209a85224e))
* **console:** add metamask ([#334](https://github.com/domhhv/akash-network-console/issues/334)) ([bc68df8](https://github.com/domhhv/akash-network-console/commit/bc68df8fe87c310f406663a73444f918d272422b))
* **console:** balance authz deployments ([#359](https://github.com/domhhv/akash-network-console/issues/359)) ([abdb18a](https://github.com/domhhv/akash-network-console/commit/abdb18a42af81e7e1724b7afbe8eb2b898b47f41))
* **console:** managed wallets popup confirmation ([#342](https://github.com/domhhv/akash-network-console/issues/342)) ([c7d16d6](https://github.com/domhhv/akash-network-console/commit/c7d16d6a0d942cef8e64c6978d9ff565a0336c0d))
* **contact-point:** implements unleash feature flagging and contact creation ui ([6ad02ce](https://github.com/domhhv/akash-network-console/commit/6ad02ce382dc76b9d317aa3934416da3605ad53b))
* **deployment:** clean up trial deployments for a provider ([41018af](https://github.com/domhhv/akash-network-console/commit/41018afc0593621c4627369b9f114f849e249e44)), closes [#502](https://github.com/domhhv/akash-network-console/issues/502)
* **deployment:** implement ato top up setting ([1301314](https://github.com/domhhv/akash-network-console/commit/130131485a68f699587415f96283e0dc83072502)), closes [#412](https://github.com/domhhv/akash-network-console/issues/412)
* **deployment:** implement plain linux deployment page ([6da5565](https://github.com/domhhv/akash-network-console/commit/6da5565c049ab9f9debace6e42ec976347b6b3a0)), closes [#227](https://github.com/domhhv/akash-network-console/issues/227)
* **deployment:** implements custodial deployments top up data collection ([108f073](https://github.com/domhhv/akash-network-console/commit/108f0736359cc866bb9aa01e3935105c413c8aae)), closes [#39](https://github.com/domhhv/akash-network-console/issues/39)
* **deployment:** improve new deployment page ([3ffc38b](https://github.com/domhhv/akash-network-console/commit/3ffc38b2e942f11fc1ab11624aaa653745de6637)), closes [#444](https://github.com/domhhv/akash-network-console/issues/444)
* **deployment:** managed wallet api update deployment ([#1093](https://github.com/domhhv/akash-network-console/issues/1093)) ([6998834](https://github.com/domhhv/akash-network-console/commit/699883436cc1763a20f65cce17390403107b179a))
* displays first lease service uri on deployment list if deployment name is unknown and small UX improvements ([#924](https://github.com/domhhv/akash-network-console/issues/924)) ([f3e9b8d](https://github.com/domhhv/akash-network-console/commit/f3e9b8d96878fab4cc89c37a2ad7747ab844c1b1))
* **env:** implement unified file loading in console-web ([12f282a](https://github.com/domhhv/akash-network-console/commit/12f282aa2798d9597a9f950520fb19d174cb635e)), closes [#313](https://github.com/domhhv/akash-network-console/issues/313)
* extract custom components ([#256](https://github.com/domhhv/akash-network-console/issues/256)) ([2d3e889](https://github.com/domhhv/akash-network-console/commit/2d3e8898f5d6e081f49da3ae5892023317f0b6e7))
* extract UI components shadcn ([#239](https://github.com/domhhv/akash-network-console/issues/239)) ([f2da963](https://github.com/domhhv/akash-network-console/commit/f2da963b4b56e6e006959216f35ca8cd7a4fb4f6))
* improve provider leases graph ([#246](https://github.com/domhhv/akash-network-console/issues/246)) ([f5fe74e](https://github.com/domhhv/akash-network-console/commit/f5fe74e15d6b3d7fbccb28de141451ced5336823))
* init provider console with next, tailwind and shadcn ([#243](https://github.com/domhhv/akash-network-console/issues/243)) ([8afb22d](https://github.com/domhhv/akash-network-console/commit/8afb22da7228d83b75201ab23155a3c1d463fc82))
* introduce multi-line commands ([e58349b](https://github.com/domhhv/akash-network-console/commit/e58349b7eeb5f28adc80dbedd4cf3b5ca304b72f)), closes [#175](https://github.com/domhhv/akash-network-console/issues/175)
* jwt provider schema ([#1312](https://github.com/domhhv/akash-network-console/issues/1312)) ([379a2d3](https://github.com/domhhv/akash-network-console/commit/379a2d3ceb519e8b49c75373b8aa7a4a735bf599))
* merge "Upload SDL" to "Build your template" and add "Plain Linux" template ([#244](https://github.com/domhhv/akash-network-console/issues/244)) ([0edf499](https://github.com/domhhv/akash-network-console/commit/0edf4992b6e01f6243ab226f2666ec4e05c312e4))
* **notifications:** adds basic alerts service ([5d4d6fc](https://github.com/domhhv/akash-network-console/commit/5d4d6fcf23ceb2b317453a001d4043855df5c5d1))
* provider deployments on provider console ([#416](https://github.com/domhhv/akash-network-console/issues/416)) ([62374e1](https://github.com/domhhv/akash-network-console/commit/62374e15d4e02ffa9f44080a2d41a676b403d70b))
* **provider:** added auto attributes, fixed issue on activity-logs ([#872](https://github.com/domhhv/akash-network-console/issues/872)) ([309922b](https://github.com/domhhv/akash-network-console/commit/309922ba65013363c024ff7ace1f00d2bfe64004))
* **provider:** added cicd ([#706](https://github.com/domhhv/akash-network-console/issues/706)) ([a3e3ec3](https://github.com/domhhv/akash-network-console/commit/a3e3ec356d103a71a465a725d20faec1ecdc15c3))
* **provider:** added disconnect button for control machines ([#996](https://github.com/domhhv/akash-network-console/issues/996)) ([dd1bc74](https://github.com/domhhv/akash-network-console/commit/dd1bc74832ae889298ea0cfa6f7234cb935ae33c))
* **provider:** added node upgrade button in settings ([#1007](https://github.com/domhhv/akash-network-console/issues/1007)) ([98fa7fb](https://github.com/domhhv/akash-network-console/commit/98fa7fb87a2f36ff4cc7846c01f99f5be5ed04e3))
* **provider:** added port and DNS checker screen ([#1112](https://github.com/domhhv/akash-network-console/issues/1112)) ([8e97e08](https://github.com/domhhv/akash-network-console/commit/8e97e08863aebaafdcd2f9e525f76ce3d144947b))
* **provider:** added upgrade button for provider ([#1110](https://github.com/domhhv/akash-network-console/issues/1110)) ([c2d7512](https://github.com/domhhv/akash-network-console/commit/c2d751233e4b4779e584761392bf0175e8c8ee1c))
* **provider:** added version to sidebar ([#897](https://github.com/domhhv/akash-network-console/issues/897)) ([5a3bef5](https://github.com/domhhv/akash-network-console/commit/5a3bef5803bcc0c452fa888e9aaee99e32f54e45))
* **provider:** changed user field non editable and default to root ([#740](https://github.com/domhhv/akash-network-console/issues/740)) ([5a81826](https://github.com/domhhv/akash-network-console/commit/5a8182611baec310d2ba3243449e740841ca4f75))
* **provider:** control-machine add/edit - online/offline functionality ([#447](https://github.com/domhhv/akash-network-console/issues/447)) ([ec70124](https://github.com/domhhv/akash-network-console/commit/ec70124ad2a414f5bda37d9a047cef8e9e98ec51))
* **provider:** converted monthly pricing to hourly pricing ([#896](https://github.com/domhhv/akash-network-console/issues/896)) ([c6e21c7](https://github.com/domhhv/akash-network-console/commit/c6e21c7cc3a3395c31b95a298fa73c2748eeec0e))
* **provider:** new and improved home page for non provider ([#531](https://github.com/domhhv/akash-network-console/issues/531)) ([9c6cddf](https://github.com/domhhv/akash-network-console/commit/9c6cddfeafd0ba95e9feb877239560d88833af3a))
* **provider:** new provider trial endpoint ([2712e38](https://github.com/domhhv/akash-network-console/commit/2712e380b8f5af0930abbdf9347a1dee3eb75f8a)), closes [#488](https://github.com/domhhv/akash-network-console/issues/488)
* **provider:** node management with changes to create cluster ([#1167](https://github.com/domhhv/akash-network-console/issues/1167)) ([ef79ff6](https://github.com/domhhv/akash-network-console/commit/ef79ff6c500350bf014183c7101d3f5cf6190d3a))
* **provider:** persistent storage ([#493](https://github.com/domhhv/akash-network-console/issues/493)) ([7125f88](https://github.com/domhhv/akash-network-console/commit/7125f8857845c5b44009b15b882d2e5ae3e293b1))
* **provider:** provider attributes and actions ([#451](https://github.com/domhhv/akash-network-console/issues/451)) ([6dfaf3b](https://github.com/domhhv/akash-network-console/commit/6dfaf3bc28ab741c680aece89268065c69853477))
* **provider:** provider pricing feature ([#475](https://github.com/domhhv/akash-network-console/issues/475)) ([14d73fa](https://github.com/domhhv/akash-network-console/commit/14d73fa4c3b099e9d530db76949394e16557aa73))
* **provider:** settings feature ([#476](https://github.com/domhhv/akash-network-console/issues/476)) ([bd487a8](https://github.com/domhhv/akash-network-console/commit/bd487a87f6ca6a390c112a8e4296af8d35fffe2b))
* **provider:** test and audit instruction for non-audited providers ([#1111](https://github.com/domhhv/akash-network-console/issues/1111)) ([5ac9fe4](https://github.com/domhhv/akash-network-console/commit/5ac9fe48211683a71953d76b4768be26620f163e))
* **provider:** uninstall provider using console ([#1341](https://github.com/domhhv/akash-network-console/issues/1341)) ([cc37e35](https://github.com/domhhv/akash-network-console/commit/cc37e355879370d89c7a944fb097bd27685a457b))
* **release:** implement release with image build ([a9fa7e8](https://github.com/domhhv/akash-network-console/commit/a9fa7e80b373af4ca90438292f582e661680fb2d))
* shared packages ([#237](https://github.com/domhhv/akash-network-console/issues/237)) ([bd79006](https://github.com/domhhv/akash-network-console/commit/bd79006abff3ee2d06657269ddd0e76d1554f275))
* **styling:** improve sidebar ([#1344](https://github.com/domhhv/akash-network-console/issues/1344)) ([77e88dd](https://github.com/domhhv/akash-network-console/commit/77e88dd9a61b0d38ded8e108a58a6de093a29de7))
* upgrade nodejs version to 22.14 (latest lts) ([#1095](https://github.com/domhhv/akash-network-console/issues/1095)) ([8533b35](https://github.com/domhhv/akash-network-console/commit/8533b355762016829c4435fd67c7885df79b251e))
* **wallet:** improve coupon codes ux ([#1028](https://github.com/domhhv/akash-network-console/issues/1028)) ([b4a81c7](https://github.com/domhhv/akash-network-console/commit/b4a81c79b97213ae72d37efe4771129f5b69b5ef))
* **wallet:** improve fiat payments ux ([295e085](https://github.com/domhhv/akash-network-console/commit/295e08542deb57634de624c5815e1e7127333a16)), closes [#411](https://github.com/domhhv/akash-network-console/issues/411)


### Bug Fixes

* change deployment details error ([#784](https://github.com/domhhv/akash-network-console/issues/784)) ([a0971ac](https://github.com/domhhv/akash-network-console/commit/a0971ac787dfc5dea0029ead0b684edb450e66cf))
* **deployment:** managed wallet user template ([ab83f2f](https://github.com/domhhv/akash-network-console/commit/ab83f2f699e84b3a4f90739d2d003a9f8e9d27aa)), closes [#483](https://github.com/domhhv/akash-network-console/issues/483)
* **deployment:** managed walllet fixes ([#382](https://github.com/domhhv/akash-network-console/issues/382)) ([4a43483](https://github.com/domhhv/akash-network-console/commit/4a4348390c56d0f2794b6689cf19ef84edaf9c54))
* **deployment:** validate max deposit amount correctly ([44c0274](https://github.com/domhhv/akash-network-console/commit/44c02745635510b8b5eb6bb4f9462b232543f393)), closes [#603](https://github.com/domhhv/akash-network-console/issues/603)
* disables nodejs auto family selection ([#1212](https://github.com/domhhv/akash-network-console/issues/1212)) ([c6be104](https://github.com/domhhv/akash-network-console/commit/c6be104cf583a07d20fb9f92661ffa29e23b492a))
* ensure release can detect changes for apps based on local packages ([#1070](https://github.com/domhhv/akash-network-console/issues/1070)) ([e1053c4](https://github.com/domhhv/akash-network-console/commit/e1053c456ba718fc58a93799e550e9338d9aea45))
* ensure that akash prebuilt templates exist in the final docker image ([#1020](https://github.com/domhhv/akash-network-console/issues/1020)) ([2a940a3](https://github.com/domhhv/akash-network-console/commit/2a940a349a85182f88fb8a83990bf3a78b0bab3f))
* ensures provider-proxy has valid blockchain API_URL on sandbox env ([#1032](https://github.com/domhhv/akash-network-console/issues/1032)) ([325461e](https://github.com/domhhv/akash-network-console/commit/325461e684a547669ac9765a3ac378ceadb86ee1))
* fallbacks to `local` if DEPLOYMENT_ENV is not specified ([#1029](https://github.com/domhhv/akash-network-console/issues/1029)) ([f9bc424](https://github.com/domhhv/akash-network-console/commit/f9bc4242900c58b0bd519e5c755616aedccfb71b))
* fixes warnings in ui package ([#979](https://github.com/domhhv/akash-network-console/issues/979)) ([3279d94](https://github.com/domhhv/akash-network-console/commit/3279d948179edd5473fd507ebb66c8532616c774))
* **observability:** make sure otl data is added to logs ([820870d](https://github.com/domhhv/akash-network-console/commit/820870d43203ddec5d3cd101d5c46b4b67e1d16d))
* **provider:** added akash install step in manual wallet import part ([#875](https://github.com/domhhv/akash-network-console/issues/875)) ([d8a21bd](https://github.com/domhhv/akash-network-console/commit/d8a21bdb1f63cdb4ccc6e1de151fec9bde080476))
* **provider:** added chart upgrade button for helm chart version update ([#1035](https://github.com/domhhv/akash-network-console/issues/1035)) ([a7e3931](https://github.com/domhhv/akash-network-console/commit/a7e39311e32563efd64a9b6b1e8657b789139ff8))
* **provider:** added missing passphrase field in final request ([#864](https://github.com/domhhv/akash-network-console/issues/864)) ([98dfc89](https://github.com/domhhv/akash-network-console/commit/98dfc892d93c4db40e8bae7c18d8743ad5c68d69))
* **provider:** added missing prop passphrase ([#867](https://github.com/domhhv/akash-network-console/issues/867)) ([8a38776](https://github.com/domhhv/akash-network-console/commit/8a3877685bd046d828b53060996ba963e765c51b))
* **provider:** added missing types and added error handling ([#751](https://github.com/domhhv/akash-network-console/issues/751)) ([aee3589](https://github.com/domhhv/akash-network-console/commit/aee35895d9d632194907c9f04f5d50b7d0f52b58))
* **provider:** added redirect once we have a success on network upgrade ([#1016](https://github.com/domhhv/akash-network-console/issues/1016)) ([09c276a](https://github.com/domhhv/akash-network-console/commit/09c276a27f841dd6f43a1c4bf5dcb1b31a448b63))
* **provider:** better error handling on non provider calls (404 error) ([#813](https://github.com/domhhv/akash-network-console/issues/813)) ([3180198](https://github.com/domhhv/akash-network-console/commit/31801989e7f0703df121957ddb80998adedd8042))
* **provider:** change dynamic message for signing ([#778](https://github.com/domhhv/akash-network-console/issues/778)) ([7cbc421](https://github.com/domhhv/akash-network-console/commit/7cbc4213ac42bd4220e2af1828840e5189e65e5b))
* **provider:** changed upgrade status api to fix upgrade checks ([#1082](https://github.com/domhhv/akash-network-console/issues/1082)) ([0978a09](https://github.com/domhhv/akash-network-console/commit/0978a09805eed45af4dca7757d3d917883fe7874))
* **provider:** control machine disconnect on different wallet connect ([#773](https://github.com/domhhv/akash-network-console/issues/773)) ([724bc1e](https://github.com/domhhv/akash-network-console/commit/724bc1ed38bf3108b477c9e3a5e2e9406e4b141e))
* **provider:** Copy changes and refactor some components ([#530](https://github.com/domhhv/akash-network-console/issues/530)) ([c5efbff](https://github.com/domhhv/akash-network-console/commit/c5efbff4bb45ea7eac58c174ca1456a70f2ae556))
* **provider:** fix control machine error and added cta button ([#1109](https://github.com/domhhv/akash-network-console/issues/1109)) ([4a78637](https://github.com/domhhv/akash-network-console/commit/4a786372fb01431566782760762978947790a4f5))
* **provider:** fix ga and color bug ([#763](https://github.com/domhhv/akash-network-console/issues/763)) ([bff0985](https://github.com/domhhv/akash-network-console/commit/bff09851ebe769fad01bc3705ab2d258d8e47bd9))
* **provider:** fixed loading issue on some pages, fixed some guides ([#939](https://github.com/domhhv/akash-network-console/issues/939)) ([5054b19](https://github.com/domhhv/akash-network-console/commit/5054b192e7a656bc82fa3b22862bea090f13e02c))
* **provider:** fixed non provider login issue ([#879](https://github.com/domhhv/akash-network-console/issues/879)) ([1d571a5](https://github.com/domhhv/akash-network-console/commit/1d571a5725e18b791c77ce50d6066755901e2f5b))
* **provider:** fixed onchain error and blank client error on retry provider process ([#848](https://github.com/domhhv/akash-network-console/issues/848)) ([c354e77](https://github.com/domhhv/akash-network-console/commit/c354e77f065d411441424787d30188e800053737))
* **provider:** fixed ordering on control node and worker node and cal… ([#1199](https://github.com/domhhv/akash-network-console/issues/1199)) ([50ba064](https://github.com/domhhv/akash-network-console/commit/50ba064593421bcfacbab4ddb520a5d8fa7b2f7f))
* **provider:** fixed persistent storage ui issue ([#754](https://github.com/domhhv/akash-network-console/issues/754)) ([36c363c](https://github.com/domhhv/akash-network-console/commit/36c363c69bceaba856d70a28b8537171027a6304))
* **provider:** fixed provider pricing page where issue when no gpus ([#982](https://github.com/domhhv/akash-network-console/issues/982)) ([5464ec0](https://github.com/domhhv/akash-network-console/commit/5464ec058a5ea91c6d19e23cf35ff3b2d68943f3))
* **provider:** fixed token issue and actionDetails issue ([#852](https://github.com/domhhv/akash-network-console/issues/852)) ([48d58f4](https://github.com/domhhv/akash-network-console/commit/48d58f4b3eecbe469f96bc4df0d8f9d5bbde80ea))
* **provider:** general ui fixes ([#708](https://github.com/domhhv/akash-network-console/issues/708)) ([e443868](https://github.com/domhhv/akash-network-console/commit/e443868253f5be7c1be77732aacd03c8e7cd7d85))
* **provider:** online status changed and control-machine changed ([#1310](https://github.com/domhhv/akash-network-console/issues/1310)) ([0566fb2](https://github.com/domhhv/akash-network-console/commit/0566fb24916c8c60144661fd8ef6f47bd180ef05))
* **provider:** styling issue fixed in dark mode ([#1216](https://github.com/domhhv/akash-network-console/issues/1216)) ([175d513](https://github.com/domhhv/akash-network-console/commit/175d5136fc073c8262b8de20e462f73abbc7d6c2))
* **provider:** updated provider pricing decimals before sending ([#998](https://github.com/domhhv/akash-network-console/issues/998)) ([22d25f7](https://github.com/domhhv/akash-network-console/commit/22d25f7f660a7d256a13012ad582772892f4219e))
* removed apaexcharts from provider console ([#626](https://github.com/domhhv/akash-network-console/issues/626)) ([b390b35](https://github.com/domhhv/akash-network-console/commit/b390b353b66522d3fdd9634430ac9c3150de2fce))
* removed apex charts from the provider console repo ([#630](https://github.com/domhhv/akash-network-console/issues/630)) ([e48d6de](https://github.com/domhhv/akash-network-console/commit/e48d6de306d0299259ebe93c4e42f72a0d287cae))
* **template:** eliminates eternal loop when query if failing  ([ca93b51](https://github.com/domhhv/akash-network-console/commit/ca93b5123725394094aada5149811de548717d94))
* **ui:** fix tailwind.config.js content paths ([73de799](https://github.com/domhhv/akash-network-console/commit/73de799719ac916132dea08b2070e7d4b613fd26))
* update nextjs version ([#1105](https://github.com/domhhv/akash-network-console/issues/1105)) ([5d24cd8](https://github.com/domhhv/akash-network-console/commit/5d24cd851eac88a0fbf04899ffdda689994c2b8b))
* updates dockerfile for node apps ([#1068](https://github.com/domhhv/akash-network-console/issues/1068)) ([54194a0](https://github.com/domhhv/akash-network-console/commit/54194a08ca514f1be623a20e7a01cfbbf2e2244a))


### Code Refactoring

* adds warmUpTemplatesCache script ([#962](https://github.com/domhhv/akash-network-console/issues/962)) ([46b37eb](https://github.com/domhhv/akash-network-console/commit/46b37eb632dc6da429da94b599160b2e587980c9))
* **authorization:** use react-table for deployment grants  ([cfd28ab](https://github.com/domhhv/akash-network-console/commit/cfd28aba79a349f17293a669f8104b8565db8e8d)), closes [#595](https://github.com/domhhv/akash-network-console/issues/595)
* **console:** remove address book feature from console ([605d0d5](https://github.com/domhhv/akash-network-console/commit/605d0d53524ffe35f7b1e0de6faf1d10886bff0c))
* **dx:** fix linting issues ([1115a60](https://github.com/domhhv/akash-network-console/commit/1115a609ba6a080e4c91331f45fb0d12b48c5504))
* enable eslint rules which restricts what dependencies can be used ([#1074](https://github.com/domhhv/akash-network-console/issues/1074)) ([509fcd3](https://github.com/domhhv/akash-network-console/commit/509fcd39831311950afdfb51c189ef46b02c855f))
* enables strict types for ui package ([#953](https://github.com/domhhv/akash-network-console/issues/953)) ([216ac0e](https://github.com/domhhv/akash-network-console/commit/216ac0e59e739c34d1d7acb2e14fd1a9d94bc816))
* **forms:** zod form validation and components ([#283](https://github.com/domhhv/akash-network-console/issues/283)) ([3b8279d](https://github.com/domhhv/akash-network-console/commit/3b8279d3b7e6f2f1160c26383a04cf775140f1b5))
* moves trial authorization spending out of db transaction ([#1129](https://github.com/domhhv/akash-network-console/issues/1129)) ([8c8e372](https://github.com/domhhv/akash-network-console/commit/8c8e3729ce7c1f7ad2c387b471b326f1fbc0d353))
* refactors services in console-web to strict types ([#1004](https://github.com/domhhv/akash-network-console/issues/1004)) ([fd85685](https://github.com/domhhv/akash-network-console/commit/fd85685858b64ead49a946955fe8da48ea9cc49b))
* removes sentry from console-api ([#1220](https://github.com/domhhv/akash-network-console/issues/1220)) ([8339158](https://github.com/domhhv/akash-network-console/commit/8339158321771e716cddd7de4242d7de370697d0))
* update react-query in provider-console ([#1002](https://github.com/domhhv/akash-network-console/issues/1002)) ([cd5b64a](https://github.com/domhhv/akash-network-console/commit/cd5b64adeac4d8774f44ef90b4802e69fea69cfe))
* uses logger and http sdk from local pkgs for notification service ([fe3539b](https://github.com/domhhv/akash-network-console/commit/fe3539b5995aca4f88fe281da5ac282779ee3f8e))

## [1.11.0](https://github.com/akash-network/console/compare/provider-console/v1.10.0...provider-console/v1.11.0) (2025-05-21)


### Features

* **contact-point:** implements unleash feature flagging and contact creation ui ([6ad02ce](https://github.com/akash-network/console/commit/6ad02ce382dc76b9d317aa3934416da3605ad53b))
* **provider:** uninstall provider using console ([#1341](https://github.com/akash-network/console/issues/1341)) ([cc37e35](https://github.com/akash-network/console/commit/cc37e355879370d89c7a944fb097bd27685a457b))
* **styling:** improve sidebar ([#1344](https://github.com/akash-network/console/issues/1344)) ([77e88dd](https://github.com/akash-network/console/commit/77e88dd9a61b0d38ded8e108a58a6de093a29de7))

## [1.10.0](https://github.com/akash-network/console/compare/provider-console/v1.9.7...provider-console/v1.10.0) (2025-05-16)


### Features

* jwt provider schema ([#1312](https://github.com/akash-network/console/issues/1312)) ([379a2d3](https://github.com/akash-network/console/commit/379a2d3ceb519e8b49c75373b8aa7a4a735bf599))

## [1.9.7](https://github.com/akash-network/console/compare/provider-console/v1.9.6...provider-console/v1.9.7) (2025-05-12)


### Bug Fixes

* **provider:** online status changed and control-machine changed ([#1310](https://github.com/akash-network/console/issues/1310)) ([0566fb2](https://github.com/akash-network/console/commit/0566fb24916c8c60144661fd8ef6f47bd180ef05))

## [1.9.6](https://github.com/akash-network/console/compare/provider-console/v1.9.5...provider-console/v1.9.6) (2025-05-10)


### Code Refactoring

* uses logger and http sdk from local pkgs for notification service ([fe3539b](https://github.com/akash-network/console/commit/fe3539b5995aca4f88fe281da5ac282779ee3f8e))

## [1.9.5](https://github.com/akash-network/console/compare/provider-console/v1.9.4...provider-console/v1.9.5) (2025-05-01)


### Code Refactoring

* **authorization:** use react-table for deployment grants  ([cfd28ab](https://github.com/akash-network/console/commit/cfd28aba79a349f17293a669f8104b8565db8e8d)), closes [#595](https://github.com/akash-network/console/issues/595)

## [1.9.4](https://github.com/akash-network/console/compare/provider-console/v1.9.3...provider-console/v1.9.4) (2025-04-17)


### Code Refactoring

* removes sentry from console-api ([#1220](https://github.com/akash-network/console/issues/1220)) ([8339158](https://github.com/akash-network/console/commit/8339158321771e716cddd7de4242d7de370697d0))

## [1.9.3](https://github.com/akash-network/console/compare/provider-console/v1.9.2...provider-console/v1.9.3) (2025-04-15)


### Bug Fixes

* **provider:** styling issue fixed in dark mode ([#1216](https://github.com/akash-network/console/issues/1216)) ([175d513](https://github.com/akash-network/console/commit/175d5136fc073c8262b8de20e462f73abbc7d6c2))

## [1.9.2](https://github.com/akash-network/console/compare/provider-console/v1.9.1...provider-console/v1.9.2) (2025-04-15)


### Bug Fixes

* disables nodejs auto family selection ([#1212](https://github.com/akash-network/console/issues/1212)) ([c6be104](https://github.com/akash-network/console/commit/c6be104cf583a07d20fb9f92661ffa29e23b492a))

## [1.9.1](https://github.com/akash-network/console/compare/provider-console/v1.9.0...provider-console/v1.9.1) (2025-04-11)


### Bug Fixes

* **provider:** fixed ordering on control node and worker node and cal… ([#1199](https://github.com/akash-network/console/issues/1199)) ([50ba064](https://github.com/akash-network/console/commit/50ba064593421bcfacbab4ddb520a5d8fa7b2f7f))

## [1.9.0](https://github.com/akash-network/console/compare/provider-console/v1.8.1...provider-console/v1.9.0) (2025-04-10)


### Features

* **provider:** node management with changes to create cluster ([#1167](https://github.com/akash-network/console/issues/1167)) ([ef79ff6](https://github.com/akash-network/console/commit/ef79ff6c500350bf014183c7101d3f5cf6190d3a))

## [1.8.1](https://github.com/akash-network/console/compare/provider-console/v1.8.0...provider-console/v1.8.1) (2025-04-08)


### Bug Fixes

* **provider:** fix control machine error and added cta button ([#1109](https://github.com/akash-network/console/issues/1109)) ([4a78637](https://github.com/akash-network/console/commit/4a786372fb01431566782760762978947790a4f5))

## [1.8.0](https://github.com/akash-network/console/compare/provider-console/v1.7.0...provider-console/v1.8.0) (2025-04-02)


### Features

* **provider:** added port and DNS checker screen ([#1112](https://github.com/akash-network/console/issues/1112)) ([8e97e08](https://github.com/akash-network/console/commit/8e97e08863aebaafdcd2f9e525f76ce3d144947b))
* **provider:** test and audit instruction for non-audited providers ([#1111](https://github.com/akash-network/console/issues/1111)) ([5ac9fe4](https://github.com/akash-network/console/commit/5ac9fe48211683a71953d76b4768be26620f163e))

## [1.7.0](https://github.com/akash-network/console/compare/provider-console/v1.6.0...provider-console/v1.7.0) (2025-03-31)


### Features

* **deployment:** managed wallet api update deployment ([#1093](https://github.com/akash-network/console/issues/1093)) ([6998834](https://github.com/akash-network/console/commit/699883436cc1763a20f65cce17390403107b179a))
* upgrade nodejs version to 22.14 (latest lts) ([#1095](https://github.com/akash-network/console/issues/1095)) ([8533b35](https://github.com/akash-network/console/commit/8533b355762016829c4435fd67c7885df79b251e))


### Code Refactoring

* moves trial authorization spending out of db transaction ([#1129](https://github.com/akash-network/console/issues/1129)) ([8c8e372](https://github.com/akash-network/console/commit/8c8e3729ce7c1f7ad2c387b471b326f1fbc0d353))

## [1.6.0](https://github.com/akash-network/console/compare/provider-console/v1.5.2...provider-console/v1.6.0) (2025-03-26)


### Features

* **provider:** added upgrade button for provider ([#1110](https://github.com/akash-network/console/issues/1110)) ([c2d7512](https://github.com/akash-network/console/commit/c2d751233e4b4779e584761392bf0175e8c8ee1c))


### Bug Fixes

* update nextjs version ([#1105](https://github.com/akash-network/console/issues/1105)) ([5d24cd8](https://github.com/akash-network/console/commit/5d24cd851eac88a0fbf04899ffdda689994c2b8b))

## [1.5.2](https://github.com/akash-network/console/compare/provider-console/v1.5.1...provider-console/v1.5.2) (2025-03-21)


### Bug Fixes

* **provider:** changed upgrade status api to fix upgrade checks ([#1082](https://github.com/akash-network/console/issues/1082)) ([0978a09](https://github.com/akash-network/console/commit/0978a09805eed45af4dca7757d3d917883fe7874))

## [1.5.1](https://github.com/akash-network/console/compare/provider-console/v1.5.0...provider-console/v1.5.1) (2025-03-20)


### Code Refactoring

* enable eslint rules which restricts what dependencies can be used ([#1074](https://github.com/akash-network/console/issues/1074)) ([509fcd3](https://github.com/akash-network/console/commit/509fcd39831311950afdfb51c189ef46b02c855f))

## [1.5.0](https://github.com/akash-network/console/compare/provider-console/v1.4.2...provider-console/v1.5.0) (2025-03-20)


### Features

* introduce multi-line commands ([e58349b](https://github.com/akash-network/console/commit/e58349b7eeb5f28adc80dbedd4cf3b5ca304b72f)), closes [#175](https://github.com/akash-network/console/issues/175)
* **notifications:** adds basic alerts service ([5d4d6fc](https://github.com/akash-network/console/commit/5d4d6fcf23ceb2b317453a001d4043855df5c5d1))
* **wallet:** improve coupon codes ux ([#1028](https://github.com/akash-network/console/issues/1028)) ([b4a81c7](https://github.com/akash-network/console/commit/b4a81c79b97213ae72d37efe4771129f5b69b5ef))


### Bug Fixes

* ensure release can detect changes for apps based on local packages ([#1070](https://github.com/akash-network/console/issues/1070)) ([e1053c4](https://github.com/akash-network/console/commit/e1053c456ba718fc58a93799e550e9338d9aea45))
* updates dockerfile for node apps ([#1068](https://github.com/akash-network/console/issues/1068)) ([54194a0](https://github.com/akash-network/console/commit/54194a08ca514f1be623a20e7a01cfbbf2e2244a))


### Code Refactoring

* update react-query in provider-console ([#1002](https://github.com/akash-network/console/issues/1002)) ([cd5b64a](https://github.com/akash-network/console/commit/cd5b64adeac4d8774f44ef90b4802e69fea69cfe))

## [1.4.2](https://github.com/akash-network/console/compare/provider-console/v1.4.1...provider-console/v1.4.2) (2025-03-14)


### Bug Fixes

* **provider:** added chart upgrade button for helm chart version update ([#1035](https://github.com/akash-network/console/issues/1035)) ([a7e3931](https://github.com/akash-network/console/commit/a7e39311e32563efd64a9b6b1e8657b789139ff8))

## [1.4.1](https://github.com/akash-network/console/compare/provider-console/v1.4.0...provider-console/v1.4.1) (2025-03-13)


### Bug Fixes

* **provider:** added redirect once we have a success on network upgrade ([#1016](https://github.com/akash-network/console/issues/1016)) ([09c276a](https://github.com/akash-network/console/commit/09c276a27f841dd6f43a1c4bf5dcb1b31a448b63))

## [1.4.0](https://github.com/akash-network/console/compare/provider-console/v1.3.1...provider-console/v1.4.0) (2025-03-12)


### Features

* **provider:** added node upgrade button in settings ([#1007](https://github.com/akash-network/console/issues/1007)) ([98fa7fb](https://github.com/akash-network/console/commit/98fa7fb87a2f36ff4cc7846c01f99f5be5ed04e3))

## [1.3.1](https://github.com/akash-network/console/compare/provider-console/v1.3.0...provider-console/v1.3.1) (2025-03-11)


### Bug Fixes

* **provider:** updated provider pricing decimals before sending ([#998](https://github.com/akash-network/console/issues/998)) ([22d25f7](https://github.com/akash-network/console/commit/22d25f7f660a7d256a13012ad582772892f4219e))

## [1.3.0](https://github.com/akash-network/console/compare/provider-console/v1.2.2...provider-console/v1.3.0) (2025-03-11)


### Features

* **provider:** added disconnect button for control machines ([#996](https://github.com/akash-network/console/issues/996)) ([dd1bc74](https://github.com/akash-network/console/commit/dd1bc74832ae889298ea0cfa6f7234cb935ae33c))

## [1.2.2](https://github.com/akash-network/console/compare/provider-console/v1.2.1...provider-console/v1.2.2) (2025-03-10)


### Bug Fixes

* **provider:** fixed provider pricing page where issue when no gpus ([#982](https://github.com/akash-network/console/issues/982)) ([5464ec0](https://github.com/akash-network/console/commit/5464ec058a5ea91c6d19e23cf35ff3b2d68943f3))

## [1.2.1](https://github.com/akash-network/console/compare/provider-console/v1.2.0...provider-console/v1.2.1) (2025-03-05)


### Bug Fixes

* **provider:** fixed loading issue on some pages, fixed some guides ([#939](https://github.com/akash-network/console/issues/939)) ([5054b19](https://github.com/akash-network/console/commit/5054b192e7a656bc82fa3b22862bea090f13e02c))

## [1.2.0](https://github.com/akash-network/console/compare/provider-console/v1.1.2...provider-console/v1.2.0) (2025-03-04)


### Features

* **provider:** added version to sidebar ([#897](https://github.com/akash-network/console/issues/897)) ([5a3bef5](https://github.com/akash-network/console/commit/5a3bef5803bcc0c452fa888e9aaee99e32f54e45))
* **provider:** converted monthly pricing to hourly pricing ([#896](https://github.com/akash-network/console/issues/896)) ([c6e21c7](https://github.com/akash-network/console/commit/c6e21c7cc3a3395c31b95a298fa73c2748eeec0e))

## [1.1.2](https://github.com/akash-network/console/compare/provider-console/v1.1.1...provider-console/v1.1.2) (2025-02-20)


### Bug Fixes

* **provider:** fixed non provider login issue ([#879](https://github.com/akash-network/console/issues/879)) ([1d571a5](https://github.com/akash-network/console/commit/1d571a5725e18b791c77ce50d6066755901e2f5b))

## [1.1.1](https://github.com/akash-network/console/compare/provider-console/v1.1.0...provider-console/v1.1.1) (2025-02-20)


### Bug Fixes

* **provider:** added akash install step in manual wallet import part ([#875](https://github.com/akash-network/console/issues/875)) ([d8a21bd](https://github.com/akash-network/console/commit/d8a21bdb1f63cdb4ccc6e1de151fec9bde080476))

## [1.1.0](https://github.com/akash-network/console/compare/provider-console/v1.0.7...provider-console/v1.1.0) (2025-02-20)


### Features

* **provider:** added auto attributes, fixed issue on activity-logs ([#872](https://github.com/akash-network/console/issues/872)) ([309922b](https://github.com/akash-network/console/commit/309922ba65013363c024ff7ace1f00d2bfe64004))

## [1.0.7](https://github.com/akash-network/console/compare/provider-console/v1.0.6...provider-console/v1.0.7) (2025-02-19)


### Bug Fixes

* **provider:** added missing prop passphrase ([#867](https://github.com/akash-network/console/issues/867)) ([8a38776](https://github.com/akash-network/console/commit/8a3877685bd046d828b53060996ba963e765c51b))

## [1.0.6](https://github.com/akash-network/console/compare/provider-console/v1.0.5...provider-console/v1.0.6) (2025-02-19)


### Bug Fixes

* **provider:** added missing passphrase field in final request ([#864](https://github.com/akash-network/console/issues/864)) ([98dfc89](https://github.com/akash-network/console/commit/98dfc892d93c4db40e8bae7c18d8743ad5c68d69))

## [1.0.5](https://github.com/akash-network/console/compare/provider-console/v1.0.4...provider-console/v1.0.5) (2025-02-14)


### Bug Fixes

* **provider:** fixed token issue and actionDetails issue ([#852](https://github.com/akash-network/console/issues/852)) ([48d58f4](https://github.com/akash-network/console/commit/48d58f4b3eecbe469f96bc4df0d8f9d5bbde80ea))

## [1.0.4](https://github.com/akash-network/console/compare/provider-console/v1.0.3...provider-console/v1.0.4) (2025-02-14)


### Bug Fixes

* **provider:** fixed onchain error and blank client error on retry provider process ([#848](https://github.com/akash-network/console/issues/848)) ([c354e77](https://github.com/akash-network/console/commit/c354e77f065d411441424787d30188e800053737))

## [1.0.3](https://github.com/akash-network/console/compare/provider-console/v1.0.2...provider-console/v1.0.3) (2025-02-11)

## [1.0.2] (https://github.com/akash-network/console/compare/provider-console/v1.0.1...provider-console/v1.0.2) (2025-02-05)

### Bug Fixes

* deployment: fix(provider): better error handling on non provider calls ([e27e54c](https://github.com/akash-network/console/commit/e27e54c95022fd1eda926ac407a82fb7a279c639)), closes [#811](https://github.com/akash-network/console/issues/811)

## [1.0.1] (https://github.com/akash-network/console/compare/provider-console/v1.0.0...provider-console/v1.0.1) (2025-02-05)

### Code Refactoring

* releasing provider console 1.0.1
