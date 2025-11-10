'use client';

import { useEffect, useState } from 'react';

// @third-party
import axios from 'axios';

// @project
import { Hero17 } from '@/blocks/hero';
import LazySection from '@/components/LazySection';
import useDataThemeMode from '@/hooks/useDataThemeMode';

// @data
import { faq, hero, integration, pricing, clientele, cta10 } from './data';
import { Clientele8 } from '@/blocks/clientele';
import { metrics3 } from './data/metrics';
import Feature28 from '@/blocks/feature/Feature28';
import { feature19 } from './data/feature';
import { process1 } from './data/process';
import { testimonial2 } from './data/testimonial';

/***************************  PAGE - MAIN  ***************************/

export default function Main() {
  useDataThemeMode();

  // removed heading and caption and setup state with axios price
  const [newPricing, setNewPricing] = useState(pricing);

  useEffect(() => {
    const fetchPricingData = async () => {
      try {
        await axios.get('https://raw.githubusercontent.com/phoenixcoded/phoenixcoded.github.io/main/saas-able-pricing.json').then((res) => {
          const data = res.data;
          setNewPricing({
            ...newPricing,
            plans: newPricing.plans.map((item, index) => ({
              ...item,
              price: data[index].price,
              offerPrice: data[index].offerPrice
            }))
          });
        });
      } catch (error) {
        console.error('Error fetching pricing data:', error);
      }
    };

    fetchPricingData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Hero17 {...hero} />
      <Clientele8
        heading="10,000+ companies already growing"
        caption="In partnership with renowned banks, we’re committed to offering you a secure and advanced financial experience"
        clienteleList={clientele?.clienteleList}
      />
      <LazySection
        sections={[{ importFunc: () => import('@/blocks/metrics').then((module) => ({ default: module.Metrics3 })), props: metrics3 }]}
        offset="200px"
      />
      <Feature28 {...feature19} />
      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/process').then((module) => ({ default: module.Process4 })), props: process1 },
          { importFunc: () => import('@/blocks/integration').then((module) => ({ default: module.Integration3 })), props: integration },
          { importFunc: () => import('@/blocks/testimonial').then((module) => ({ default: module.Testimonial2 })), props: testimonial2 }
        ]}
        offset="200px"
      />

      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/cta').then((module) => ({ default: module.Cta10 })), props: cta10 },
          { importFunc: () => import('@/blocks/faq').then((module) => ({ default: module.Faq6 })), props: faq }
        ]}
        offset="200px"
      />
    </>
  );
}
