import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-FKY0ZMD2EN");
};

export const trackPageView = () => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname + window.location.search,
    title: document.title,
  });
};

export const trackEvent = (category, action, label) => {
  ReactGA.event(action, {
    event_category: category,
    event_label: label,
  });
};
