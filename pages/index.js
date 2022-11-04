import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// Components
import { Header } from "../components/Header";
import { Headline } from "../components/Headline";
import { BackgroundImage } from "../components/BackgroundImage";
import { LinkButton } from "../components/LinkButton";
import { LinkButtonTargetBlank } from "../components/LinkButtonTargetBlank";
import { Footer } from "../components/Footer";
import { WorkModal } from "../components/WorkModal";

// Images
import heroImage from "../public/images/hero_image.jpg";
import vespaAnalogyImage from "../public/images/vespa_analogy_image.jpg";
import whatWeDoImage from "../public/images/what_we_do_image.jpg";
import businessModelImageLarge from "../public/images/business_model_image_large.jpg";
import cojonesTshirtImageLarge from "../public/images/cojones-t-shirt-image-large.jpg";
import workImageLarge from "../public/images/work-image-large.jpg";
import karlaImage from "../public/images/leaders__karla__image.jpg";
import maxImage from "../public/images/leaders__max__image.jpg";
import socialImagePost1 from "../public/images/post-1.jpg";
import socialImageMacaws from "../public/images/macaws.jpg";
import socialImageWorkers1 from "../public/images/workers-1.jpg";
import socialImageOffice from "../public/images/office.jpg";
import socialImageTeam from "../public/images/team.jpg";
import socialImageLocutor from "../public/images/locutor.jpg";
import socialImagePost2 from "../public/images/post-2.jpg";
import socialImagWomanWithPhone from "../public/images/woman-with-phone.jpg";
import rac from "../public/images/rac.jpg";
import direct from "../public/images/direct.jpg";
import nissanXterra from "../public/images/nissan-xterra.jpg";
import wranglerQueEsLoqueVes from "../public/images/wrangler-que-es-lo-que-ves.jpg";
import wranglerQueEsLoqueVesBig from "../public/images/wrangler-que-es-lo-que-ves-big.webp";
import dq from "../public/images/dq.jpg";
import donJulio from "../public/images/don-julio.jpg";
import donJulioBig from "../public/images/don-julio-big.webp";
import polloCampero from "../public/images/pollo-campero.jpg";
import wranglerTag from "../public/images/wrangler-tag.jpg";
import dallasMavericks from "../public/images/dallas-mavericks.jpg";
import budweiser from "../public/images/budweiser.jpg";
import whiteCastle from "../public/images/white-castle.jpg";
import cremaSalvadorena from "../public/images/crema-salvadorena.jpg";
import muensterMeet from "../public/images/muenster-meet.jpg";
import muensterMeetBig from "../public/images/muenster-meet-big.webp";
import miamigo from "../public/images/miamigo.jpg";
import miamigoBig from "../public/images/miamigo-big.webp";
import polloCamperoBillboard from "../public/images/pollo-campero-billboard.jpg";
import polloCamperoBillboardBig from "../public/images/pollo-campero-billboard-big.webp";
import childrenHealth from "../public/images/children-s-health.jpg";
import budweiserFifa from "../public/images/budweiser-fifa.jpg";
import toyota from "../public/images/toyota.jpg";
import greyhound from "../public/images/greyhound.jpg";
import greyhoundBig from "../public/images/greyhound-big.webp";
import senorRico from "../public/images/senor-rico.jpg";
import ctaArrow from "../public/images/cta-arrow.svg";

// Buttons large images
import contactBtnLargeDefault from "../public/images/btn-large-contact-default.svg";
import contactBtnLargeHover from "../public/images/btn-large-contact-hover.svg";
import likeUsBtnLargeDefault from "../public/images/btn-large-like-us-default.svg";
import likeUsBtnLargeHover from "../public/images/btn-large-like-us-hover.svg";
import shopBtnLargeDefault from "../public/images/btn-large-shop-default.svg";
import shopBtnLargeHover from "../public/images/btn-large-shop-hover.svg";
import submitBtnLargeDefault from "../public/images/btn-large-submit-default.svg";
import submitBtnLargeHover from "../public/images/btn-large-submit-hover.svg";

import Modal from "../components/Modal";

import React, { useState } from 'react';

// Website
export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [currentModalType, setCurrentModalType] = useState('img');
  const [currentModalImg, setCurrentModalImg] = useState(donJulio);
  const [currentModalYT, setCurrentModalYT] = useState('Ismkt0x4ZZI&autoplay=1');

  const openModal = (modalType, src) => {
    setCurrentModalType(modalType);
    if (modalType === 'img') {
      setCurrentModalImg(src)
    }
    if (modalType === 'video') {
      setCurrentModalYT(src)
    }

    setShowModal(true);
  }

  return (
    <div>
      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
      >
        <div className="modal">
          <div className="modal__items__container">
            <div className="modal__title">
              <h2></h2>
            </div>
            <div className="modal__content">
              {currentModalType === 'img' && (
                <Image
                  src={currentModalImg}
                />
              )}

              {currentModalType === 'video' && (
                <iframe
                  className="modal__video"
                  src={`https://www.youtube.com/embed/${currentModalYT}`}
                  frameBorder="0"
                  allow="acelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embed youtube"
                />
              )}
            </div>
          </div>
        </div>
        {/* <div className="modal__project__container">
          <iframe className="modal__video" src="https://www.youtube.com/embed/Ismkt0x4ZZI?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div> */}
      </Modal>

      <Head>
        <title>Co.Jones Creative. Independent Hispanic Ad Agency</title>
        <meta
          name="description"
          content="We pitch culturally relevant ideas that strike results within the Hispanic market. We help companies target the Hispanic market efficiently with our flexible structure. Interested?"
        />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <Header />

      <main>

        {/* Hero ----------------------------------------------------------------------- */}
        <section className="home__hero">
          <Headline>
            <h2 className="headline home__hero__headline">
              Still on the fence about targeting the Hispanic market?
            </h2>
          </Headline>
          <BackgroundImage 
            className="home__hero__image"
            imgHeight="partial" 
            src={heroImage}
          />
          <div className="cta__container home__hero__cta__container">
            <h2 className="cta__text home__hero__cta__text">
              Hispanics are playing a major role in driving U.S. population
              growth.<span className="blue home__hero__cta__text__end"> Don't wait any longer.</span>{" "}
            </h2>
            <div className="home__hero__cta__link-button__container">
              <LinkButton href="#cta" src={contactBtnLargeDefault} srcHover={contactBtnLargeHover} />
            </div>
            <div className="home__hero__cta__arrow__container">
              <div className="home__hero__cta__arrow">
                <Image src={ctaArrow} layout="fixed" />
              </div>
            </div>
          </div>
        </section>

        {/* Vespa Analogy --------------------------------------------------------------- */}
        <section className="vespa-analogy">
          <Headline>
            <h2 className="headline vespa-analogy__headline">
              It's time to consider a more efficient Hispanic ad agency
              alternative
            </h2>
          </Headline>
          <BackgroundImage
            className="vespa-analogy__image"
            imgHeight="partial" 
            src={vespaAnalogyImage}
          />
          <div className="cta__container vespa-analogy__cta__container">
            <h2 className="cta__text vespa-analogy__cta__text">
              <span className="blue">Give us a test ride!</span> <br /> We know
              our way around!
            </h2>
            <div className="vespa-analogy__cta__link-button__container">
              <LinkButton href="#cta" src={contactBtnLargeDefault} srcHover={contactBtnLargeHover} />
            </div>
            <div className="vespa-analogy__cta__arrow__container">
              <div className="vespa-analogy__cta__arrow">
                <Image src={ctaArrow} layout="fixed" />
              </div>
            </div>
          </div>
        </section>

        {/* What we do ------------------------------------------------------------------ */}
        <section className="what-we-do">
          <Headline>
            <h2 className="headline what-we-do__headline">
              Co.Jones pitches culturally relevant ideas that strike results
              within the Hispanic market.
            </h2>
          </Headline>
          <BackgroundImage
            className="what-we-do__image"
            imgHeight="full" 
            src={whatWeDoImage}
          />
        </section>

        {/* Business model -------------------------------------------------------------- */}
        <section className="business-model">
          <Headline>
            <h2 className="headline business-model__headline">
              We went on our own to do it differently.{" "}
              <span className="text-blue">No BS here. </span>Being independent
              allows us to adapt to your budget and needs.
            </h2>
          </Headline>
          <BackgroundImage imgHeight="xl" src={businessModelImageLarge} />
        </section>

        {/* Leaders --------------------------------------------------------------------- */}
        <section className="leaders">
          <div className="leaders__content__container">
            <div className="leaders__image__karla__container">
              <Image
                className="leaders__image__karla"
                src={karlaImage}
                alt="Karla Armendáriz image"
                layout="fill"
                objectFit="contain"
                objectPosition="top left"
              />
            </div>
            <div className="leaders__copy__container leaders__copy__karla__container">
              <h3 className="leaders__name">Karla Armendáriz</h3>
              <h4 className="leaders__job-title">account services</h4>
              <p className="leaders__copy">
                Born and raised on the US/Mexico border in Presidio, Texas,
                Karla knows firsthand the reality of living in a bilingual,
                bicultural world. She received her double major in
                Communications and Spanish from the University of the Incarnate
                Word in San Antonio, Texas.
              </p>
              <p className="leaders__copy">
                She immediately went to work for a top Hispanic ad agency in the
                country, and over the course of 20 years has established herself
                as a seasoned Hispanic marketing consultant and consumer
                specialist.
              </p>
              <p className="leaders__copy">
                Karla is a goal and detailed oriented, creative and motivated.
                Her ability and experience in managing people, budgets, goals,
                and schedules while overseeing multiple tasks are some of her
                greatest talents. She is an excellent communicator and
                presenter, and her experience helping clients penetrate the U.S.
                Hispanic market spans from strategic planning, advertising,
                field marketing, promotional/event marketing, and account
                management. Karla has helped many of the nation's top brands
                establish themselves in the Hispanic marketplace. Among them are
                Denny's Restaurants, Nissan, Daimler-Chrysler, Toyota, Subaru,
                Pollo Campero and Rent-A-Center. Her consulting experience also
                includes working on non-profit categories organizations such as
                Mensa, Carter BloodCare and Catholic Charities.
              </p>
            </div>
            <div className="leaders__separator"></div>
            <div className="leaders__copy__container leaders__copy__max__container">
              <h3 className="leaders__name text-align-right">
                Max Lefeld
              </h3>
              <h4 className="leaders__job-title text-align-right">
                founder & creative director
              </h4>
              <p className="leaders__copy text-align-right">
                Born in Caracas, Venezuela and graduated with a
                Journalism/Social Communications bachelor's degree from
                Universidad Central de Venezuela. In 2004, Max founded Co.Jones
                creative.
              </p>
              <p className="leaders__copy text-align-right">
                With more than 25 years of experience. Started as a copywriter
                at Lintas. Went on to work at some of the world's leading
                agencies including Leo Burnett, J. Walter Thompson, Ogilvy &
                Mather, working on such global brands as Coca-Cola, Procter and
                Gamble, Unilever, Nestle, Kellogg, Gatorade, Heinz.
              </p>
              <p className="leaders__copy text-align-right">
                In 1995 moved to the US to lead the creative department for
                FCB/Publicis/Siboney and then moved to be Ornelas' Chief
                Creative Officer working for Nissan, Budweiser, Michelob,
                ALLTEL, Ocean Spray, Texas Rangers, Dallas Mavericks among
                others.
              </p>
              <p className="leaders__copy text-align-right">
                His work has crossed cultural barriers and has been recognized
                through countless awards including Clio, NY Festival, FIAP,
                Addy's, O'Toole, Telly's, ANDA, Adage Hispanic Creative Awards,
                HispanicAd, and Se Habla Español.
              </p>
            </div>
            <div className="leaders__image__max__container">
              <Image
                className="leaders__image__max"
                src={maxImage}
                alt="Max Lefeld image"
                layout="fill"
                objectFit="contain"
                objectPosition="top right"
              />
            </div>
          </div>
        </section>

        {/* Social media --------------------------------------------------------------- */}
        <section className="social-media">
          <div className="social-media__cta__link-button__container">
            <LinkButtonTargetBlank
              href="https://www.instagram.com/co.jonescreative/"
              src={likeUsBtnLargeDefault} srcHover={likeUsBtnLargeHover}
            />
          </div>
          <div className="social-media__cta__arrow__container">
            <div className="social-media__cta__arrow">
              <Image src={ctaArrow} layout="fixed" />
            </div>
          </div>
          <div className="social-media__images__container">
            <div className="social-media__post-1__image__container">
              <Image
                className="social-media__post-1__image"
                src={socialImagePost1}
                layout="responsive"
              />
            </div>
            <div className="social-media__macaws__image__container">
              <Image
                className="social-media__macaws__image"
                src={socialImageMacaws}
                layout="responsive"
              />
            </div>
            <div className="social-media__workers-1__image__container">
              <Image
                className="social-media__workers-1__image"
                src={socialImageWorkers1}
                layout="responsive"
              />
            </div>
            <div className="social-media__office__image__container">
              <Image
                className="social-media__office__image"
                src={socialImageOffice}
                layout="responsive"
              />
            </div>
            <div className="social-media__team__image__container">
              <Image
                className="social-media__team__image"
                src={socialImageTeam}
                layout="responsive"
              />
            </div>
            <div className="social-media__locuto__image__containerr">
              <Image
                className="social-media__locutor__image"
                src={socialImageLocutor}
                layout="responsive"
              />
            </div>
            <div className="social-media__post-2__image__container">
              <Image
                className="social-media__post-2__image"
                src={socialImagePost2}
                layout="responsive"
              />
            </div>
            <div className="social-media__woman-with-phone__image__container">
              <Image
                className="social-media__woman-with-phone__image"
                src={socialImagWomanWithPhone}
                layout="responsive"
              />
            </div>
          </div>
        </section>

        {/* Work ---------------------------------------------------------------------- */}
        <section className="work">
          <Headline>
            <h2 className={"headline work__headline text-align-center"}>
              {" "}
              <span className="text-blue">
                Actions speak louder than words.
              </span>{" "}
              <br /> Let our work do the talking. <br /> From global accounts to
              local start-ups from national TV spots to a social media
              post. <br /> We are extremely proud of the vast experience working
              with our amazing clients.
            </h2>
          </Headline>

          <BackgroundImage
            className="work__image"
            imgHeight="full"
            src={workImageLarge}
            // objectPosition="40%"
          />

          <div className="work__projects-grid__container">

            <div
              className="work__projects-grid__image__container__rac cursor-pointer"
              onClick={() => { openModal('video', 'Ismkt0x4ZZI?&autoplay=1'); }}
            >
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className="work__projects-grid__image"
                src={rac}
                layout="responsive"
              />
            </div>
            {/* <WorkModal
              projectsGridImgContainer={"rac"}
              projectsGridImgSrc={rac}
            /> */}

            <div
              className="work__projects-grid__image__container__direct cursor-pointer"
              onClick={() => { openModal('video', '_kZ8xWPyEIY?&autoplay=1'); }}
            >

              <div className="white"></div>
              <div className="black"></div>
              <Image
                className="work__projects-grid__image"
                src={direct}
                layout="responsive"
              />
            </div>

            <div
              className="work__projects-grid__image__container__nissan-xterra cursor-pointer"
              onClick={() => { openModal('img', nissanXterra); }}
            >
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className="work__projects-grid__image"
                src={nissanXterra}
                layout="responsive"
              />
            </div>

            <div
              className="work__projects-grid__image__container__wrangler-que-es-lo-que-ves cursor-pointer"
              onClick={() => { openModal('img', wranglerQueEsLoqueVesBig); }}
            >
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className="work__projects-grid__image"
                src={wranglerQueEsLoqueVes}
                layout="responsive"
              />
            </div>

            <div
              className="work__projects-grid__image__container__dq cursor-pointer"
              onClick={() => { openModal('img', dq); }}
            >
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className="work__projects-grid__image"
                src={dq}
                layout="responsive"
              />
            </div>

            <div
              className="work__projects-grid__image__container__don-julio cursor-pointer"
              onClick={() => { openModal('img', donJulioBig); }}
            >
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className="work__projects-grid__image"
                src={donJulio}
                layout="responsive"
              />
            </div>

            <div
              className="work__projects-grid__image__container__pollo-campero cursor-pointer"
              onClick={() => { openModal('img', polloCampero); }}
            >
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className="work__projects-grid__image"
                src={polloCampero}
                layout="responsive"
              />
            </div>

            <div
              className="work__projects-grid__image__container__wrangler-tag cursor-pointer"
              onClick={() => { openModal('video', 'f8vWxAMNAho?&autoplay=1'); }}
            >
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className="work__projects-grid__image"
                src={wranglerTag}
                layout="responsive"
              />
            </div>

            <div
              className="work__projects-grid__image__container__dallas-mavericks cursor-pointer"
              onClick={() => { openModal('video', '9ktWWaQU4wk?&autoplay=1'); }}
            >
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className="work__projects-grid__image"
                src={dallasMavericks}
                layout="responsive"
              />
            </div>

            <div
              className="work__projects-grid__image__container__budweiser cursor-pointer"
              onClick={() => { openModal('video', 'EhBhek9Y5OY?&autoplay=1'); }}
            >
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className="work__projects-grid__image"
                src={budweiser}
                layout="responsive"
              />
            </div>

            <div
              className="work__projects-grid__image__container__white-castle cursor-pointer"
              onClick={() => { openModal('video', 'vEgtxqVocGY?&autoplay=1'); }}
            >
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className="work__projects-grid__image"
                src={whiteCastle}
                layout="responsive"
              />
            </div>

            <div
              className="work__projects-grid__image__container__crema-salvadorena cursor-pointer"
              onClick={() => { openModal('img', cremaSalvadorena); }}
            >
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className="work__projects-grid__image"
                src={cremaSalvadorena}
                layout="responsive"
              />
            </div>

            <div
              className="work__projects-grid__image__container__muenster-meet cursor-pointer"
              onClick={() => { openModal('img', muensterMeetBig); }}
            >
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className="work__projects-grid__image"
                src={muensterMeet}
                layout="responsive"
              />
            </div>

            <div
              className="work__projects-grid__image__container__miamigo cursor-pointer"
              onClick={() => { openModal('img', miamigoBig); }}
            >
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className="work__projects-grid__image"
                src={miamigo}
                layout="responsive"
              />
            </div>

            <div
              className="work__projects-grid__image__container__pollo-campero-billboard cursor-pointer"
              onClick={() => { openModal('img', polloCamperoBillboardBig); }}
            >
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className="work__projects-grid__image"
                src={polloCamperoBillboard}
                layout="responsive"
              />
            </div>

            <div
              className="work__projects-grid__image__container__children-s-health cursor-pointer"
              onClick={() => { openModal('video', '34QbgRNeN04?&autoplay=1'); }}
            >
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className="work__projects-grid__image"
                src={childrenHealth}
                layout="responsive"
              />
            </div>

            <div
              className="work__projects-grid__image__container__budweiser-fifa cursor-pointer"
              onClick={() => { openModal('video', 'ApLFKPM0QPg?&autoplay=1'); }}
            >
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className="work__projects-grid__image"
                src={budweiserFifa}
                layout="responsive"
              />
            </div>

            <div
              className="work__projects-grid__image__container__toyota cursor-pointer"
              onClick={() => { openModal('video', 'iE-9z0y_TyI?&autoplay=1'); }}
            >
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className="work__projects-grid__image"
                src={toyota}
                layout="responsive"
              />
            </div>

            <div
              className="work__projects-grid__image__container__greyhound cursor-pointer"
              onClick={() => { openModal('img', greyhoundBig); }}
            >
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className="work__projects-grid__image"
                src={greyhound}
                layout="responsive"
              />
            </div>

            <div
              className="work__projects-grid__image__container__senor-rico cursor-pointer"
              onClick={() => { openModal('img', senorRico); }}
            >
              <div className="white"></div>
              <div className="black"></div>
              <Image
                className="work__projects-grid__image"
                src={senorRico}
                layout="responsive"
              />
            </div>

          </div>

        </section>

        {/* Merch ---------------------------------------------------------------------- */}
        <section className="merch">
          <Headline>
            <h2 className="headline-blue">
              Get your <br /> Co.Jones Merch!
            </h2>
          </Headline>
          <div className="merch__cta__link-button__container">
            <LinkButtonTargetBlank
              href="https://www.bonfire.com/store/show-cojones/"
              src={shopBtnLargeDefault} srcHover={shopBtnLargeHover}
            />
          </div>
          <BackgroundImage imgHeight="full" src={cojonesTshirtImageLarge} />
        </section>

        {/* Call to action ------------------------------------------------------------- */}
        <section className="cta" id="cta">
          <Headline>
            <h2 className="headline">Contact Us</h2>
          </Headline>

          <div className="cta__elements__container">
            <div className="cta__copy__container">
              <ul className="cta__copy__ul">
                <li className="cta__copy cta__copy__first__item">
                  Interested in expanding your business to reach the Hispanic
                  market?
                </li>
                <br />
                <br />
                <li className="cta__copy">
                  Paying too much for ad agency bureaucracy?
                </li>
                <br />
                <br />
                <li
                  className="cta__copy cta__copy__last__item {
                width: 36rem;
               }"
                >
                  Looking for an independent partner to do Hispanic advertising
                  projects for your clients?
                </li>
                <br />
              </ul>
              <h3 className="cta__copy">
                If you answered <span className="text-blue">yes</span> to any of
                these questions, <span className="text-blue">call us.</span>
              </h3>
              <br />
              <br />
              <a className="cta__copy-blue" href="tel://+214-538-8692">
                214-538-8692
              </a>
              <span className="cta__copy-blue"> &nbsp; | &nbsp; </span>
              <a className="cta__copy-blue" href="tel://+210-710-3109">
                210-710-3109
              </a>
            </div>

            <div className="cta__divider-line"></div>

            <div className="cta__form__container">
              <form action="" className="cta__form">
                <label htmlFor="name">Your name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Type your name"
                />

                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Type email"
                />

                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Type phone number"
                />

                <label htmlFor="text">How can we help?</label>
                <input
                  type="text"
                  id="text"
                  name="text"
                  placeholder="A brief description here"
                />

                <button type="submit" className="cta__form__btn">
                  <Image src={submitBtnLargeDefault} />
                </button>
              </form>
            </div>
          </div>
        </section>

      </main>

      {/* Footer --------------------------------------------------------------------- */}
      <Footer />
    </div>
  );
}
