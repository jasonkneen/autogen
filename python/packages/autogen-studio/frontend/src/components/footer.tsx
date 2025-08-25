import * as React from "react";
import Icon from "./icons";
import { useConfigStore } from "../hooks/store";
import { fetchVersion } from "./utils/utils";

const Footer = () => {
  const version = useConfigStore((state) => state.version);
  const setVersion = useConfigStore((state) => state.setVersion);

  React.useEffect(() => {
    if (version === null) {
      fetchVersion().then((data) => {
        if (data && data.data) {
          setVersion(data.data.version);
        }
      });
    }
  }, []);
  return (
    <div className="text-primary p-3 border-t border-secondary flex items-center justify-between">
      <div className="text-xs">
        Maintained by the AutoGen{" "}
        <a
          target={"_blank"}
          rel={"noopener noreferrer"}
          className="underline inline-block text-accent hover:text-accent hover:opacity-80"
          href="https://microsoft.github.io/autogen/"
        >
          Team
        </a>
      </div>
      {version && (
        <div className="text-xs text-secondary">v{version}</div>
      )}
    </div>
  );
};
export default Footer;
