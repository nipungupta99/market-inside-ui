import Button from "./Button";

const CallToActionSection = () => {
  return (
    <section className="call-to-action">
      <div className="call-to-action__container">
        <h1 className="call-to-action__title">SET YOUR BUSINESS</h1>
        <h2 className="call-to-action__subtitle">
          IN MOTION WITH VALUABLE INSIGHTS
        </h2>
        <Button className="call-to-action__button">SCHEDULE A DEMO</Button>
      </div>
    </section>
  );
};

export default CallToActionSection;
