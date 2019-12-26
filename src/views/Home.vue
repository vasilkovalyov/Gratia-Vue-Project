<template>
  	<div class="home">
		<IntroHomeSection></IntroHomeSection>
		<PerfectionSection></PerfectionSection>
		<DetailsSection></DetailsSection>
  	</div>
</template>

<script>

import PerfectionSection from '@/components/PerfectionSection'
import IntroHomeSection from '@/components/IntroHomeSection/IntroHomeSection'
import DetailsSection from '@/components/DetailsSection/DetailsSection'


export default {
	name: 'home',
  	components: {
		PerfectionSection,
		IntroHomeSection,
		DetailsSection
	}
}
</script>
