import HtmlToReact from "html-to-react";
import _ from "lodash";
import React from "react";

export function htmlToReact(html) {
  const usecapedHtml = _.unescape(html).replace(/&nbsp;/g, " ");
  const htmlReactParser = new HtmlToReact.Parser(React);
  const reactComponent = htmlReactParser.parse(usecapedHtml);
  return reactComponent;
}
