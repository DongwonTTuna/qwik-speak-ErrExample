import { component$,  } from '@builder.io/qwik';
import { $translate as t, Speak, useSpeakLocale } from 'qwik-speak';
import type { Translation } from 'qwik-speak';

export const Home = component$(() => {
  const loc = useSpeakLocale();
  const twoseventeen = t<Translation[]>(
    'company.history.seventeen@@[{"month":"11","desc":"수출유망중소기업선정"},{"month":"11","desc":"자본금450백만원증자"},{"month":"09","desc":"ISO14001인증"},{"month":"06","desc":"벤처기업선정"},{"month":"06","desc":"서울국제치과치과전시회참가"},{"month":"03","desc":"강릉생산공장신설"},{"month":"03","desc":"독일국제치과전시회참가"},{"month":"02","desc":"두바이국제치과전시회참가"},{"month":"02","desc":"KCCI무역업체등록"}]'
  );
  const twosixteen = t<Translation[]>(
    'company.history.sixteen@@[{"month":"11","desc":"ISO9001품질인증획득"},{"month":"09","desc":"소재부품전문기업인정(산업통상자원부)"},{"month":"09","desc":"미국아틀랜틱치과기공전시회참가"},{"month":"09","desc":"인천치과기자재전시회참가"},{"month":"09","desc":"기업부설연구소인정(미래창조과학부)"},{"month":"07","desc":"대한치과기자재전시회참가"},{"month":"06","desc":"지그겔특허등록(출원제10-2016-0061171호)"},{"month":"06","desc":"접착강도개선특허등록(특허제10-1627083호)"},{"month":"04","desc":"경기도치과기공전시회참가"},{"month":"04","desc":"자본금200백만원증자"},{"month":"04","desc":"서울국제치과기자재전시회참가"},{"month":"03","desc":"서울치과기공전시회참가"},{"month":"02","desc":"미국시카고치과기공전시회참가"}]'
  );
  const twofiftheen = t<Translation[]>(
    'company.history.fifteen@@[{"month":"11","desc":"의정부캐드캠학술대회참가"},{"month":"10","desc":"충청호남치과기공학술회참가"},{"month":"09","desc":"미국아틀랜틱기공전시회참가"},{"month":"09","desc":"미국메릴랜드기공세미나개최"},{"month":"08","desc":"자본금80백만원대표이사이창택"},{"month":"08","desc":"(주)바이오덴법인전환"}]'
  );
  const twofourteen = t<Translation[]>(
    'company.history.fourteen@@[{"month":"01","desc":"Zircos-E특허등록(특허제10-1354177호)"}]'
  );
  const twothirteen = t<Translation[]>(
    'company.history.thirdteen@@[{"month":"04","desc":"엠앤씨덴탈개인사업체설립-대표이창택"}]'
  );

  return (
    <>
            <div class='right clearfix relative'>
      <h3>History</h3>
      <div class='history'>
        <p class='history_p1 relative z-10'>
          {loc.lang === 'ko' || loc.lang === 'jp' ? (
            <>
              <span class='green'>
                {t('company.history.history_p1_green@@고객을 위한 가치창출')}
              </span>
              {t('company.history.history_p1_1@@과 인화중심의 경영을 통해 ')}
              <br />
              {t(
                'company.history.history_p1_2@@Top Brand 기업가치를 높이고자 합니다.'
              )}
            </>
          ) : (
            <>
              {t('company.history.history_p1_1@@과 인화중심의 경영을 통해 ')}
              <span class='green'>
                {t('company.history.history_p1_green@@고객을 위한 가치창출')}
              </span>
              {t(
                'company.history.history_p1_2@@Top Brand 기업가치를 높이고자 합니다.'
              )}
            </>
          )}
        </p>
        <p class='history_p2 my-10'>
          {t('company.history.history_p2@@바이오덴의 주요 연혁을 소개합니다.')}
        </p>
        <div class='career'>
          <img
            width={300}
            height={500}
            src='https://res.cloudinary.com/dfd9pdmuf/image/upload/w_300,f_auto/v1677989408/bioden/career_img_jisoec.jpg'
            srcSet=''
            alt='careerImage'
            class='absolute top-[-47px] right-0 z-0 opacity-40'
          />
          <div
            class='relative z-1 grid grid-cols-2 w-fit float-right mt-9 border-y-[1px] border-solid border-y-black py-4 text-3xl'
            style={{ gridTemplateColumns: '40px 2fr' }}
          >
            <div class='col-span-2 h-14'>2017’s</div>
            {twoseventeen.map((item, index) => {
              return (
                <>
                  <div
                    class='text-lg w-10'
                    key={`historytwoseventeenmonth${index}`}
                  >
                    {item.month}
                  </div>
                  <div
                    class={
                      item.month !== ''
                        ? 'text-lg whitespace-nowrap'
                        : ' text-right text-lg w-full whitespace-nowrap'
                    }
                    key={`historytwoseventeendesc${index}`}
                  >
                    {item.desc}
                  </div>
                </>
              );
            })}
            <div class='dotted col-span-2 my-6'></div>
            <div class='col-span-2 h-14'>2016’s</div>
            {twosixteen.map((item, index) => {
              return (
                <>
                  <div
                    class='text-lg w-10'
                    key={`historytwosixteenmonth${index}`}
                  >
                    {item.month}
                  </div>
                  <div
                    class={
                      item.month !== ''
                        ? 'text-lg whitespace-nowrap'
                        : ' text-right text-lg w-full whitespace-nowrap'
                    }
                    key={`historytwosixteendesc${index}`}
                  >
                    {item.desc}
                  </div>
                </>
              );
            })}
            <div class='dotted col-span-2 my-6'></div>
            <div class='col-span-2 h-14'>2015’s</div>
            {twofiftheen.map((item, index) => {
              return (
                <>
                  <div
                    class='text-lg w-10'
                    key={`historytwofiftheenmonth${index}`}
                  >
                    {item.month}
                  </div>
                  <div
                    class={
                      item.month !== ''
                        ? 'text-lg whitespace-nowrap'
                        : ' text-right text-lg w-full whitespace-nowrap'
                    }
                    key={`historytwofiftheendesc${index}`}
                  >
                    {item.desc}
                  </div>
                </>
              );
            })}
            <div class='dotted col-span-2 my-6'></div>
            <div class="col-span-2 h-14">2014’s</div>
            {twofourteen.map((item, index) => {
              return (
                <>
                  <div
                    class="text-lg w-10"
                    key={`historytwofourteenmonth${index}`}
                  >
                    {item.month}
                  </div>
                  <div
                    class={
                      item.month !== ''
                        ? 'text-lg whitespace-nowrap'
                        : ' text-right text-lg w-full whitespace-nowrap'
                    }
                    key={`historytwofourteendesc${index}`}
                  >
                    {item.desc}
                  </div>
                </>
              );
            })}
            <div class='dotted col-span-2 my-6'></div>
            <div class='col-span-2 h-14'>2013’s</div>
            {twothirteen.map((item, index) => {
              return (
                <>
                  <div
                    class='text-lg w-10'
                    key={`historytwothirdteenmonth${index}`}
                  >
                    {item.month}
                  </div>
                  <div
                    class={
                      item.month !== ''
                        ? 'text-lg whitespace-nowrap'
                        : ' text-right text-lg w-full whitespace-nowrap'
                    }
                    key={`historytwothirdteendesc${index}`}
                  >
                    {item.desc}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    </>
  );
});

export default component$(() => {
  return (
    /**
     * Add Home translations (only available in child components)
     */
    <Speak assets={['company']}>
      <Home />
    </Speak>
  );
});
