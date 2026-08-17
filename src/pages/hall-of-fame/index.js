import HallOfFameCard from '@/components/HallOfFameCard'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Head from 'next/head'

// TEMP DIAGNOSTIC BUILD - remove the debug prop + useEffect below once the
// SSR fetch issue is confirmed and fixed.
export async function getServerSideProps() {
  const rawBase = (process.env.BACKEND_BASE_URL || 'http://localhost:8011/swc_website/api').replace(/\/+$/, '');
  const backend_url = rawBase.endsWith('/api') ? rawBase : `${rawBase}/api`;
  const requestUrl = `${backend_url}/hallOfFame`;
  try {
    const response = await axios.get(requestUrl, { timeout: 8000 });
    return {
      props: {
        initialData: response.data,
        debug: {
          ok: true,
          requestUrl,
          envValue: process.env.BACKEND_BASE_URL || null,
          dataLength: Array.isArray(response.data) ? response.data.length : null,
        },
      },
    };
  } catch (error) {
    return {
      props: {
        initialData: [],
        debug: {
          ok: false,
          requestUrl,
          envValue: process.env.BACKEND_BASE_URL || null,
          message: error.message,
          code: error.code || null,
          responseStatus: error.response ? error.response.status : null,
          responseData: error.response ? error.response.data : null,
        },
      },
    };
  }
}

export default function HallOfFame({ initialData, debug }) {
  const data = initialData;

  useEffect(() => {
    if (debug) {
      // eslint-disable-next-line no-console
      console.log('[HallOfFame SSR debug]', debug);
    }
  }, [debug]);

  // Extract unique years sorted descending
  const years = [...new Set(data.map(item => item.year))].sort((a, b) => b.localeCompare(a));

  const [selectedYear, setSelectedYear] = useState(years[0] || null);

  const displayedCards = data.filter(item => item.year === selectedYear);

  return (
    <>
      <Head>
        <title>Hall of Fame | Students&apos; Web Committee</title>
        <meta name="description" content="A tribute to the past team leads who built the Students' Web Committee, IIT Guwahati." />
      </Head>

      {/* dummy div for adjusting top position Must be included in every index file-- 3rem for Header and 9rem for Navbar*/}
      <div className='bg-black h-[12rem] w-full'></div>

      {/* Hero Section */}
      <div className='text-white font-black bg-black mx-auto text-[3rem] sm:text-[4rem] text-center'>
        Hall of Fame
      </div>
      <hr className="w-48 h-px mx-auto mt-6 mb-4 bg-white border-0 rounded"></hr>
      <div className='text-greyuse font-Inter text-center text-sm md:text-base mb-10'>
        A tribute to the leaders who built SWC.
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col justify-center items-center w-[90%] md:w-4/5 h-auto mx-auto mb-10">

        {/* Batch Selector */}
        {years.length > 0 && (
          <div className="w-full mb-8">
            <div className="text-greyuse text-xs tracking-widest text-center mb-4">BATCH</div>
            <div className="flex flex-row flex-wrap justify-center gap-3">
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`rounded-full px-5 py-2 text-sm font-Inter transition-colors duration-200 ${
                    selectedYear === year
                      ? 'bg-white text-black font-bold'
                      : 'bg-specialgrey text-greyuse hover:text-white'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Cards Grid with Animation */}
        <div className="w-full min-h-[50vh]">
          {years.length === 0 ? (
            <div className="text-greyuse text-center my-20">No data available yet.</div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedYear}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-row flex-wrap justify-center w-full"
              >
                {displayedCards.map((item, index) => (
                  <HallOfFameCard
                    key={item._id}
                    pfp={item.pfp}
                    name={item.name}
                    role={item.role}
                    index={index}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </>
  )
}
