import React from "react";

export async function axeAccessibilityReporter(results: any) {
  if (process.env.NODE_ENV === `development` && typeof window !== `undefined`) {
    const axe = await require(`@axe-core/react`);
    const React = await require(`react`);
    const ReactDOM = await require(`react-dom`);

    axe(React, ReactDOM, 1000);
  }
}
