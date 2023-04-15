import { FC } from "react";

export const Details: FC = () => {
  return (
    <section className="page__section details" id="details">
      <div className="details__container">
        <h2 className="page__section-title">
          The Details
        </h2>

        <div className="details__detail detail">
          <div className="detail__photos">
            <div className="grid">
              <div className="
            grid__item
            grid__item--tablet-1-4
            grid__item--dekstop-1-8
          ">
                <div className="detail__photo-container">
                  <img
                    src="images/photos/1.png"
                    alt="Auto Unlock"
                    className="detail__photo"
                  />
                </div>

              </div>
              <div className="
            grid__item
            grid__item--tablet-5-6
            grid__item--dekstop-9-12
          ">
                <div className="detail__photo-container">
                  <img
                    src="images/photos/2.png"
                    alt="Auto Unlock"
                    className="detail__photo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="detail__about">
            <div className="detail__name">
              Auto Unlock
            </div>
            <p className="detail__description">
              The app senses when you're nearby to unlock automatically. GPS tracking so you know where your bike is and can track it anytime.
            </p>
          </div>

        </div>


        <div className="details__detail detail">
          <div className="detail__photos">
            <div className="grid">
              <div className="
            grid__item
            grid__item--tablet-1-4
            grid__item--dekstop-1-8
          ">
                <div className="detail__photo-container">
                  <img
                    src="images/photos/3.png"
                    alt="Auto Unlock"
                    className="detail__photo"
                  />
                </div>

              </div>
              <div className="
            grid__item
            grid__item--tablet-5-6
            grid__item--dekstop-9-12
          ">
                <div className="detail__photo-container">
                  <img
                    src="images/photos/4.png"
                    alt="Auto Unlock"
                    className="detail__photo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="detail__about">
            <div className="detail__name">
              Range & Integrated lights
            </div>
            <p className="detail__description">
              The removable battery has up to 70km battery autonomy and weighs only 2.4 kg. Lights integrated into the frame give you always-on visibility day and night.
            </p>
          </div>
        </div>



        <div className="details__detail detail">
          <div className="detail__photos">
            <div className="grid">
              <div className="
            grid__item
            grid__item--tablet-1-2
            grid__item--dekstop-1-4
          ">
                <div className="detail__photo-container">
                  <img
                    src="images/photos/5.png"
                    alt="Auto Unlock"
                    className="detail__photo"
                  />
                </div>

              </div>
              <div className="
            grid__item
            grid__item--tablet-3-6
            grid__item--dekstop-5-12
          ">
                <div className="detail__photo-container">
                  <img
                    src="images/photos/6.png"
                    alt="Auto Unlock"
                    className="detail__photo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="detail__about">
            <div className="detail__name">
              Hydraulic disc brakes & Lightweight
            </div>
            <p className="detail__description">
              Brakes with total stopping power the second you make contact. The removable battery has up to 70km battery autonomy and weighs only 2.4 kg. Lights integrated into the frame give you always-on visibility day and night.
            </p>
          </div>
        </div>


        <div className="grid grid--tablet">
          <div className="
        grid__item
        grid__item--tablet-2-5
        grid__item--dekstop-5-8
      ">
            <a
              href="#"
              className="button"
            // onclick="event.preventDefault()"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}