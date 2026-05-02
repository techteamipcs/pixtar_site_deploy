export default `<!doctype html>
<html lang="en" data-beasties-container="">

<head>
	<meta charset="utf-8">
	<title>Pixtar - Branding and Web Development Agency</title>
	<base href="/">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- SEO -->
	<meta name="description" content="Welcome to Pixtar, creative web design agency in Dubai. We specialize in Brand strategy, Web development and tailored solutions.">
	<meta name="google-site-name" content="Pixtar UAE">
	<link rel="canonical" href="https://www.pixtar.ae/">

	<!-- OG Tags -->
	<meta property="og:site_name" content="Pixtar UAE">
	<meta property="og:title" content="Pixtar UAE">
	<meta property="og:description" content="Premium branding and website design in Dubai-UAE for industry leaders seeking exceptional designs as premium as their brand.">
	<meta property="og:image" content="/favicon/pixtar1200x630.png">
	<meta property="og:type" content="website">
	<meta property="og:image:type" content="image/jpeg">
	<meta property="og:image:width" content="1200">
	<meta property="og:image:height" content="630">
	<meta property="og:url" content="https://www.pixtar.ae">
	<meta name="apple-mobile-web-app-title" content="Pixtar UAE">

	<!-- Favicon -->
	<link rel="icon" href="/favicon/favicon-32x32.png" sizes="32x32" type="image/png">
	<link rel="icon" href="/favicon/favicon-16x16.png" sizes="16x16" type="image/png">
	<link rel="icon" href="/favicon/favicon-96x96.png" sizes="96x96" type="image/png">
	<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
	<link rel="icon" href="/favicon/android-chrome-192x192.png" sizes="192x192">
	<link rel="icon" href="/favicon/android-chrome-512x512.png" sizes="512x512">
	<link rel="manifest" href="/favicon/site.webmanifest">

	<!-- ✅ Preconnect -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">

	<!-- ✅ Preload critical fonts -->
	<link rel="preload" href="https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2" as="font" type="font/woff2" crossorigin="">
	<link rel="preload" href="/fonts/lufgaRegular.woff2" as="font" type="font/woff2" crossorigin="">
	<link rel="preload" href="/fonts/lufgaBold.woff2" as="font" type="font/woff2" crossorigin="">

	<!-- ✅ Non-critical fonts — load after -->
	<link rel="preload" href="/fonts/barcelony.woff2" as="font" type="font/woff2" crossorigin="">
	<link rel="preload" href="/fonts/lufgaLight.woff2" as="font" type="font/woff2" crossorigin="">
	<link rel="preload" href="/fonts/lufgaSemiBold.woff2" as="font" type="font/woff2" crossorigin="">

	<!-- ✅ Google Fonts — non blocking -->
	<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&amp;display=swap" onload="this.rel='stylesheet'">
	<noscript>
		<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
	</noscript>

	<!-- ✅ Bootstrap — managed by Angular language state -->
	<link id="app-bootstrap-stylesheet" rel="stylesheet" data-ltr-href="/bootstrap/bootstrap.min.css" data-rtl-href="/bootstrap/bootstrap.rtl.min.css">
	<script>
		(function () {
			var html = document.documentElement;
			var link = document.getElementById('app-bootstrap-stylesheet');
			var lang = html.getAttribute('lang');
			var cookieMatch;

			if (lang !== 'en' && lang !== 'ar') {
				lang = null;
			}

			if (!lang) {
				try {
					var savedLang = localStorage.getItem('lang');
					if (savedLang === 'en' || savedLang === 'ar') {
						lang = savedLang;
					}
				} catch (error) {
					lang = null;
				}
			}

			if (!lang) {
				cookieMatch = document.cookie.match(/(?:^|;\\\\s*)lang=(ar|en)(?:;|\$)/);
				lang = cookieMatch ? cookieMatch[1] : 'en';
			}

			html.setAttribute('lang', lang);
			html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

			if (!link) {
				return;
			}

			link.setAttribute('data-managed-bootstrap', 'true');
			link.setAttribute('data-bootstrap-lang', lang);
			link.setAttribute(
				'href',
				lang === 'ar'
					? link.getAttribute('data-rtl-href') || '/bootstrap/bootstrap.rtl.min.css'
					: link.getAttribute('data-ltr-href') || '/bootstrap/bootstrap.min.css'
			);
		})();
	</script>

	<!-- ✅ Critical inline CSS — loads BEFORE Angular, prevents all CLS -->
	<style>
		/* Font faces */
		@font-face {
			font-family: 'Lufga';
			src: url('/fonts/lufgaRegular.woff2') format('woff2');
			font-weight: 400;
			font-style: normal;
			font-display: swap;
		}

		@font-face {
			font-family: 'Lufga';
			src: url('/fonts/lufgaBold.woff2') format('woff2');
			font-weight: 700;
			font-style: normal;
			font-display: swap;
		}

		@font-face {
			font-family: 'Lufga';
			src: url('/fonts/lufgaLight.woff2') format('woff2');
			font-weight: 300;
			font-style: normal;
			font-display: swap;
		}

		@font-face {
			font-family: 'Lufga';
			src: url('/fonts/lufgaSemiBold.woff2') format('woff2');
			font-weight: 600;
			font-style: normal;
			font-display: swap;
		}

		@font-face {
			font-family: 'Barcelony';
			src: url('/fonts/barcelony.woff2') format('woff2');
			font-weight: 400;
			font-style: normal;
			font-display: swap;
		}

		/* Reset */
		*,
		*::before,
		*::after {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			font-family: 'Montserrat', 'Lufga', -apple-system, sans-serif;
			-webkit-font-smoothing: antialiased;
		}

		/* ✅ Reserve banner space before Angular loads */
		app-root {
			display: block;
		}

		.cbanner {
			display: block;
			position: relative;
			min-height: 100vh;
			overflow: hidden;
		}

		.banner-skeleton {
			display: block;
			min-height: 100vh;
			background: #ffffff;
		}

		/* ✅ Reserve float image space */
		/* .floatImage {
			width: 736px;
			height: 736px;
			max-width: 40vw;
		} */

		/* ✅ Prevent nav shift */
		header,
		nav {
			display: block;
			min-height: 70px;
		}

		@media (max-width: 991px) {

			.cbanner,
			.banner-skeleton {
				min-height: 600px;
			}

			/* .floatImage {
				max-width: 100%;
				height: auto;
				aspect-ratio: 1/1;
			} */
		}

		@media (max-width: 767px) {

			.cbanner,
			.banner-skeleton {
				min-height: 450px;
			}
		}
	</style>

<style>@font-face{font-family:lufga-regular;src:url(/fonts/lufgaRegular.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}body{overflow-x:hidden;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;scroll-behavior:smooth;text-rendering:optimizeSpeed;font-family:lufga-regular,sans-serif;font-size:16px}html,body{overflow-y:auto}html{overflow-y:scroll}body{margin:0}</style><link rel="stylesheet" href="styles-OQ4T6S7Q.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-OQ4T6S7Q.css"></noscript></head>

<body ngcm="">
	<app-root></app-root>
<link rel="modulepreload" href="chunk-UIR4YHLL.js"><link rel="modulepreload" href="chunk-IPSAZGZU.js"><link rel="modulepreload" href="chunk-Q7YZ2IPK.js"><link rel="modulepreload" href="chunk-W2FGBWMQ.js"><link rel="modulepreload" href="chunk-EMXMDSUE.js"><link rel="modulepreload" href="chunk-QDH5APDR.js"><link rel="modulepreload" href="chunk-MTIATRXZ.js"><link rel="modulepreload" href="chunk-5EQT6RHZ.js"><link rel="modulepreload" href="chunk-IMPBB4AK.js"><script src="main-PYKSKZ4A.js" type="module"></script></body>

</html>`;