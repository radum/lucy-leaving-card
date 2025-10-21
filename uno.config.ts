import {
	defineConfig,
	presetIcons,
	presetWind3,
	transformerDirectives
} from 'unocss';

export default defineConfig({
	transformers: [transformerDirectives()],
	presets: [
		presetWind3(),
		presetIcons({
			extraProperties: {
				'display': 'inline-block',
				'vertical-align': 'middle'
			}
		})
	]
});
