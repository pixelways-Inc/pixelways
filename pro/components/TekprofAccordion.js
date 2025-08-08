import { Accordion } from "react-bootstrap";

const TekprofAccordion = ({
  event,
  active,
  onClick,
  title,
  content = "At vero eoset accusamus etiusto dignissimos duci blanditiis praesentium corrupti dolores molest excepturi sint occaecati cupiditate",
}) => {
  return (
    <div className="accordion-item">
      <h5 className="accordion-header">
        <Accordion.Toggle
          as={"button"}
          className={`accordion-button ${active == event ? "" : "collapsed"}`}
          eventKey={event}
          aria-expanded={active == event ? "true" : "false"}
          onClick={() => onClick()}
        >
          {title}
        </Accordion.Toggle>
      </h5>
      <Accordion.Collapse eventKey={event} className="accordion-collapse">
        <div className="accordion-body">
          <p>{content}</p>
        </div>
      </Accordion.Collapse>
    </div>
  );
};
export default TekprofAccordion;
