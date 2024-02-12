'use client'

import "molstar/lib/mol-plugin-ui/skin/light.scss";
import { useEffect, createRef } from "react";
import { createPluginUI } from "molstar/lib/mol-plugin-ui";
import { PluginUIContext } from "molstar/lib/mol-plugin-ui/context";
import { renderReact18 } from "molstar/lib/mol-plugin-ui/react18";

declare global {
  interface Window {
    molstar?: PluginUIContext;
  }
}

const MolStarWrapper = () => {
  const parent = createRef<HTMLDivElement>();

  useEffect(() => {
    const init = async () => {
      // window.molstar = await createPlugin(parent.current as HTMLDivElement);
      const obj = await createPluginUI({
        target: parent.current as HTMLDivElement,
        render: renderReact18,
      });
    };
    init();

    // return () => {
    //   window.molstar?.dispose();
    //   window.molstar = undefined;
    // };
    // }, [parent, taskId]);
  }, [parent]);

  return (
    <div>
      <div
        className="h-svh w-svh"
        ref={parent}
        style={{ position: "relative" }}
      />
    </div>
  );
};

export default MolStarWrapper;
