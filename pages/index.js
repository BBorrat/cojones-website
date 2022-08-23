import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

// Components
import { Headline } from '../components/Headline'
import { BackgroundImage } from '../components/BackgroundImage'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

// Images
import heroImage from '../public/images/hero_image.jpg'
import vespaAnalogyImage from '../public/images/vespa_analogy_image.jpg'
import whatWeDoImage from '../public/images/what_we_do_image.jpg'
import businessModelImageLarge from '../public/images/business_model_image_large.jpg'
import cojonesTshirtImageLarge from '../public/images/cojones-t-shirt-image-large.jpg'
import workImageLarge from '../public/images/work-image-large.jpg'
import karlaImage from '../public/images/leaders__karla__image.jpg'
import maxImage from '../public/images/leaders__max__image.jpg'
import socialImagePost1 from '../public/images/post-1.jpg'
import socialImageMacaws from '../public/images/macaws.jpg'
import socialImageWorkers1 from '../public/images/workers-1.jpg'
import socialImageOffice from '../public/images/office.jpg'
import socialImageTeam from '../public/images/team.jpg'
import socialImageLocutor from '../public/images/locutor.jpg'
import socialImagePost2 from '../public/images/post-2.jpg'
import socialImagWomanWithPhone from '../public/images/woman-with-phone.jpg'
import rac from '../public/images/rac.jpg'
import direct from '../public/images/direct.jpg'
import nissanXterra from '../public/images/nissan-xterra.jpg'
import wranglerQueEsLoqueVes from '../public/images/wrangler-que-es-lo-que-ves.jpg'
import dq from '../public/images/dq.jpg'
import donJulio from '../public/images/don-julio.jpg'
import polloCampero from '../public/images/pollo-campero.jpg'
import wranglerTag from '../public/images/wrangler-tag.jpg'
import dallasMavericks from '../public/images/dallas-mavericks.jpg'
import budweiser from '../public/images/budweiser.jpg'
import whiteCastle from '../public/images/white-castle.jpg'
import cremaSalvadorena from '../public/images/crema-salvadorena.jpg'
import muensterMeet from '../public/images/muenster-meet.jpg'
import miamigo from '../public/images/miamigo.jpg'
import polloCamperoBillboard from '../public/images/pollo-campero-billboard.jpg'
import childrenHealth from '../public/images/children-s-health.jpg'
import budweiserFifa from '../public/images/budweiser-fifa.jpg'
import toyota from '../public/images/toyota.jpg'
import greyhound from '../public/images/greyhound.jpg'
import senorRico from '../public/images/senor-rico.jpg'

// Buttons large images
import contactBtnLargeDefault from '../public/images/btn-large-contact-default.svg'
import contactBtnLargeHover from '../public/images/btn-large-contact-hover.svg'
import likeUsBtnLargeDefault from '../public/images/btn-large-like-us-default.svg'
import likeUsBtnLargeHover from '../public/images/btn-large-like-us-hover.svg'
import shopBtnLargeDefault from '../public/images/btn-large-shop-default.svg'
import shopBtnLargeHover from '../public/images/btn-large-shop-hover.svg'
import submitBtnLargeDefault from '../public/images/btn-large-submit-default.svg'
import submitBtnLargeHover from '../public/images/btn-large-submit-hover.svg'

// Buttons mid images
import contactBtnMidDefault from '../public/images/btn-mid-contact-default.svg'
import contactBtnMidHover from '../public/images/btn-mid-contact-hover.svg'
import likeUsBtnMidDefault from '../public/images/btn-mid-like-us-default.svg'
import likeUsBtMideHover from '../public/images/btn-mid-like-us-hover.svg'
import shopBtnMidDefault from '../public/images/btn-mid-shop-default.svg'
import shopBtnMidHover from '../public/images/btn-mid-shop-hover.svg'
import submitBtnMidDefault from '../public/images/btn-mid-submit-default.svg'
import submitBtnMidHover from '../public/images/btn-mid-submit-hover.svg'

// Buttons small images
import contactBtnSmallDefault from '../public/images/btn-small-contact-default.svg'
import contactBtnSmallHover from '../public/images/btn-small-contact-hover.svg'
import likeUsBtnSmallDefault from '../public/images/btn-small-like-us-default.svg'
import likeUsBtSmalleHover from '../public/images/btn-small-like-us-hover.svg'
import shopBtnSmallDefault from '../public/images/btn-small-shop-default.svg'
import shopBtSmalldHover from '../public/images/btn-small-shop-hover.svg'
import submitBtnSmallDefault from '../public/images/btn-small-submit-default.svg'
import submitBtnSmallHover from '../public/images/btn-small-submit-hover.svg'
import { LinkButton } from '../components/LinkButton'
import { LinkButtonTargetBlank } from '../components/LinkButtonTargetBlank'

// Website
export default function Home() {
  return (
    <div>

      <Head>
        <title>Co.Jones Creative. Independent Hispanic Ad Agency</title>
        <meta name="description" content="We pitch culturally relevant ideas that strike results within the Hispanic market. We help companies target the Hispanic market efficiently with our flexible structure. Interested?" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <Header />

      <main>

        <section className="home__hero">
          <Headline>
            <h2 className='headline home__hero__headline'>Still on the fence about targeting the Hispanic market?</h2>
          </Headline>
          <BackgroundImage
            imgHeight="partial"
            src={heroImage}
          />
          <div className="cta__container home__hero__cta__container">
            <h2 className="cta__text">Hispanics are playing a major role in driving U.S. population growth.<span className="blue"> Don't wait any longer.</span> </h2>
            <div className="home__hero__cta__link-button__container">
              <LinkButton
                href="#cta"
                src={contactBtnLargeDefault}
              />
            </div>
          </div>
        </section>

        <section className="vespa-analogy">
          <Headline>
            <h2 className='headline vespa-analogy__headline'>It's time to consider a more effinient Hispanic ad agency alternative</h2>
          </Headline>
          <BackgroundImage
            imgHeight="partial"
            src={vespaAnalogyImage}
          />
          <div className="cta__container vespa-analogy__cta__container" >
            <h2 className="cta__text"><span className="blue">Give us a test ride!</span> <br /> We know our way around!</h2>
            <div className="vespa-analogy__cta__link-button__container">
              <LinkButton
                href="#cta"
                src={contactBtnLargeDefault}
              />
            </div>
          </div>
        </section>

        <section className='what-we-do'>
          <Headline>
            <h2 className='headline what-we-do__headline'>Co.Jones pitches culturally relevant ideas that strike results within the Hispanic market.</h2>
          </Headline>
          <BackgroundImage
            imgHeight="full"
            src={whatWeDoImage}
          />
        </section>

        <section className='business-model'>
          <Headline>
            <h2 className='headline business-model__headline'>We went on our own to do it differently. <span className='text-blue'>No BS here. </span>Being independent allows us to adapt to your budget and needs.</h2>
          </Headline>
          <BackgroundImage
            imgHeight="xl"
            src={businessModelImageLarge}
          />
        </section>

        <section className='leaders'>

          <div className="leaders__content__container">
            <div className='leaders__image__karla__container'>
              <Image
                className='leaders__image__karla'
                src={karlaImage}
                alt='Karla Armendáriz image'
              />
            </div>
            <div className='leaders__copy__container leaders__copy__karla__container'>
              <h3 className='leaders__name'>Karla Armendáriz</h3>
              <h4 className='leaders__job-title'>account services</h4>
              <p className='leaders__copy'>Born and raised on the US/Mexico border in Presidio, Texas, Karla knows firsthand the reality of living in a bilingual, bicultural world. She received her double major in Communications and Spanish from the University of the Incarnate Word in San Antonio, Texas.</p>
              <p className='leaders__copy'>She immediately went to work for a top Hispanic ad agency in the country, and over the course of 20 years has established herself as a seasoned Hispanic marketing consultant and consumer specialist.</p>
              <p className='leaders__copy'>Karla is a goal and detailed oriented, creative and motivated. Her ability and experience in managing people, budgets, goals, and schedules while overseeing multiple tasks are some of her greatest talents. She is an excellent communicator and presenter, and her experience helping clients penetrate the U.S. Hispanic market spans from strategic planning, advertising, field marketing, promotional/event marketing, and account management. Karla has helped many of the nation's top brands establish themselves in the Hispanic marketplace. Among them are Denny's Restaurants, Nissan, Daimler-Chrysler, Toyota, Subaru, Pollo Campero and Rent-A-Center. Her consulting experience also includes working on non-profit categories organizations such as Mensa, Carter BloodCare and Catholic Charities.</p>
            </div>
            <div className="leaders__separator"></div>
            <div className='leaders__copy__container'>
              <h3 className='leaders__name text-align-right'> <br /> Max Lefeld</h3>
              <h4 className='leaders__job-title text-align-right'>founder & creative director</h4>
              <p className='leaders__copy text-align-right'>Born in Caracas, Venezuela and graduated with a Journalism/Social Communications bachelor's degree from Universidad Central de Venezuela. In 2004, Max founded Co.Jones creative.</p>
              <p className='leaders__copy text-align-right'>With more than 25 years of experience. Started as a copywriter at Lintas. Went on to work at some of the world's leading agencies including Leo Burnett, J. Walter Thompson, Ogilvy & Mather, working on such global brands as Coca-Cola, Procter and Gamble, Unilever, Nestle, Kellogg, Gatorade, Heinz.</p>
              <p className='leaders__copy text-align-right'>In 1995 moved to the US to lead the creative department for FCB/Publicis/Siboney and then moved to be Ornelas' Chief Creative Officer working for Nissan, Budweiser, Michelob, ALLTEL, Ocean Spray, Texas Rangers, Dallas Mavericks among others.</p>
              <p className='leaders__copy text-align-right'>His work has crossed cultural barriers and has been recognized through countless awards including Clio, NY Festival, FIAP, Addy's, O'Toole, Telly's, ANDA, Adage Hispanic Creative Awards, HispanicAd, and Se Habla Español.</p>
            </div>
            <div className='leaders__image__max__container'>
              <Image
                className='leaders__image__max'
                src={maxImage}
                alt='Max Lefeld image'
              />
            </div>
          </div>

        </section>

        <section className='social-media'>
          <div className="social-media__cta__link-button__container">                                        
                <LinkButtonTargetBlank
                  href='https://www.instagram.com/co.jonescreative/'
                  src={likeUsBtnLargeDefault}
                />                          
          </div>
          <div className="social-media__images__container">            
            <div className="social-media__post-1__image__container">
              <Image
                className='social-media__post-1__image'
                src={socialImagePost1}
                layout='responsive'
              />
            </div>
            <div className="social-media____macaws__image__container">
              <Image
                className='social-media__macaws__image'
                src={socialImageMacaws}
                layout='responsive'
              />
            </div>
            <div className="social-media__workers-1__image__container">
              <Image
                className='social-media__workers-1__image'
                src={socialImageWorkers1}
                layout='responsive'
              />
            </div>
            <div className="social-media__office__image__container">
              <Image
                className='social-media__office__image'
                src={socialImageOffice}
                layout='responsive'
              />
            </div>
            <div className="social-media__team__image__container">
              <Image
                className='social-media__team__image'
                src={socialImageTeam}
                layout='responsive'
              />
            </div>
            <div className="social-media__locuto__image__containerr">
              <Image
                className='social-media__locutor__image'
                src={socialImageLocutor}
                layout='responsive'
              />
            </div>
            <div className="social-media__post-2__image__container">
              <Image
                className='social-media__post-2__image'
                src={socialImagePost2}
                layout='responsive'
              />
            </div>
            <div className="social-media__woman-with-phone__image__container">
              <Image
                className='social-media__woman-with-phone__image'
                src={socialImagWomanWithPhone}
                layout='responsive'
              />
            </div>
          </div>
        </section>

        <section className='work'>

          <Headline>
            <h2 className={'headline work__headline text-align-center'}> <span className='text-blue' >Actions speak louder than words.</span>  <br /> Let our work do the talking. <br /> From global accounts to local start-ups, <br /> from national TV spots to a social media post. <br /> We are extremely proud of the vast experience working with our amazing clients.</h2>
          </Headline>

          <BackgroundImage
            imgHeight="full"
            src={workImageLarge}
            objectPosition='bottom'
          />

          <div className="work__projects-grid__container">

            <div className="work__projects-grid__image__container__rac">
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className='work__projects-grid__image'
                src={rac}
                layout='responsive'
              />
            </div>

            <div className="work__projects-grid__image__container__direct">
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className='work__projects-grid__image'
                src={direct}
                layout='responsive'
              />
            </div>

            <div className="work__projects-grid__image__container__nissan-xterra">
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className='work__projects-grid__image'
                src={nissanXterra}
                layout='responsive'
              />
            </div>

            <div className="work__projects-grid__image__container__wrangler-que-es-lo-que-ves">
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className='work__projects-grid__image'
                src={wranglerQueEsLoqueVes}
                layout='responsive'
              />
            </div>

            <div className="work__projects-grid__image__container__dq">
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className='work__projects-grid__image'
                src={dq}
                layout='responsive'
              />
            </div>

            <div className="work__projects-grid__image__container__don-julio">
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className='work__projects-grid__image'
                src={donJulio}
                layout='responsive'
              />
            </div>

            <div className="work__projects-grid__image__container__pollo-campero">
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className='work__projects-grid__image'
                src={polloCampero}
                layout='responsive'
              />
            </div>

            <div className="work__projects-grid__image__container__wrangler-tag">
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className='work__projects-grid__image'
                src={wranglerTag}
                layout='responsive'
              />
            </div>

            <div className="work__projects-grid__image__container__dallas-mavericks">
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className='work__projects-grid__image'
                src={dallasMavericks}
                layout='responsive'
              />
            </div>

            <div className="work__projects-grid__image__container__budweiser">
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className='work__projects-grid__image'
                src={budweiser}
                layout='responsive'
              />
            </div>

            <div className="work__projects-grid__image__container__white-castle">
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className='work__projects-grid__image'
                src={whiteCastle}
                layout='responsive'
              />
            </div>

            <div className="work__projects-grid__image__container__crema-salvadorena">
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className='work__projects-grid__image'
                src={cremaSalvadorena}
                layout='responsive'
              />
            </div>

            <div className="work__projects-grid__image__container__muenster-meet">
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className='work__projects-grid__image'
                src={muensterMeet}
                layout='responsive'
              />
            </div>

            <div className="work__projects-grid__image__container__miamigo">
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className='work__projects-grid__image'
                src={miamigo}
                layout='responsive'
              />
            </div>

            <div className="work__projects-grid__image__container__pollo-campero-billboard">
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className='work__projects-grid__image'
                src={polloCamperoBillboard}
                layout='responsive'
              />
            </div>

            <div className="work__projects-grid__image__container__children-s-health">
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className='work__projects-grid__image'
                src={childrenHealth}
                layout='responsive'
              />
            </div>

            <div className="work__projects-grid__image__container__budweiser-fifa">
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className='work__projects-grid__image'
                src={budweiserFifa}
                layout='responsive'
              />
            </div>

            <div className="work__projects-grid__image__container__toyota">
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className='work__projects-grid__image'
                src={toyota}
                layout='responsive'
              />
            </div>

            <div className="work__projects-grid__image__container__greyhound">
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className='work__projects-grid__image'
                src={greyhound}
                layout='responsive'
              />
            </div>

            <div className="work__projects-grid__image__container__senor-rico">
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className='work__projects-grid__image'
                src={senorRico}
                layout='responsive'
              />
            </div>

          </div>

        </section>

        <section className='merch'>
          <Headline>
            <h2 className='headline-blue'>Get your <br /> Co.Jones Merch!</h2>
          </Headline>
          <BackgroundImage
            imgHeight="full"
            src={cojonesTshirtImageLarge}
          />
        </section>

        <section className='cta' id='cta'>
          <Headline>
            <h2 className='headline'>Contact Us</h2>
          </Headline>
          <div className="cta__elements__container">

            <div className="cta__copy__container">
              <ul className='cta__copy__ul'>
                <li className='cta__copy cta__copy__first__item'>Interested in expanding your business to reach the Hispanic market?</li>
                <br />
                <br />
                <li className='cta__copy'>Paying too much for ad agency bureaucracy?</li>
                <br />
                <br />
                <li className='cta__copy cta__copy__last__item {
                width: 36rem;
               }'>Looking for an independent partner to do Hispanic advertising projects for your clients?</li>
                <br />
              </ul>
              <h3 className='cta__copy'>If you answered <span className='text-blue'>yes</span> to any of these questions, <span className='text-blue'>call us.</span></h3>
              <br />
              <br />          
              <a className='cta__copy-blue' href="tel://+214-538-8692">214-538-8692</a><span className='cta__copy-blue'> &nbsp; | &nbsp; </span>
              <a className='cta__copy-blue' href="tel://+210-710-3109">210-710-3109</a>
            </div>

            <div className='cta__divider-line'></div>

            <div className="cta__form__container">
              
              <form action="" className='cta__form'>

                <label for="name">Your name*</label>
                <input type="text" id="name" name="name" placeholder='Type your name' />

                <label for="email">Email*</label>
                <input type="email" id="email" name="email" placeholder='Type email' />

                <label for="phone">Phone</label>
                <input type="tel" id="phone" name="phone" placeholder='Type phone number' />

                <label for="text">How can we help?</label>
                <input type="text" id="text" name="text" placeholder='A brief description here' />
                
                <button type="submit" className='cta__form__btn'>
                  <Image
                    src={submitBtnLargeDefault}
                  />
                </button>

              </form>

            </div>
          </div>
        </section>

      </main>

      <Footer />

    </div>
  )
}
