import { unset, setIfMissing, set, definePlugin, defineField } from 'sanity';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { Button, MenuButton, Menu as Menu$1, MenuItem, Dialog, Box, TextInput, Flex, Spinner, Text, Grid, Tab as Tab$1, TabList as TabList$1, TabPanel as TabPanel$1, Card, Heading, Container } from '@sanity/ui';
import { createContext, useState, useContext, forwardRef, useMemo, useEffect, useRef } from 'react';
import { IconContext } from 'react-icons';
import decamelize from 'decamelize';
import * as F7 from 'framework7-icons/react';
import * as Fa from 'react-icons/fa';
import * as Fi from 'react-icons/fi';
import * as Hi from 'react-icons/hi';
import * as Lu from 'react-icons/lu';
import * as Mdi from 'react-icons/md';
import * as Si from 'react-icons/si';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList } from 'react-window';
import { styled } from 'styled-components';
const ICON_WIDTH = "1.5em";
const ICON_HEIGHT = "1em";
const LOADING_TIMER_MS = 400;
const ALL_CONFIGURATIONS_PROVIDER = "all-icons";
const ALL_CONFIGURATIONS_TITLE = "All Icons";
const OptionsContext = createContext(void 0);
const OptionsProvider = _ref => {
  let {
    options = {},
    children
  } = _ref;
  const [value] = useState(options);
  return /* @__PURE__ */jsx(OptionsContext.Provider, {
    value,
    children
  });
};
const useOptions = () => {
  const context = useContext(OptionsContext);
  if (context === void 0) {
    throw new Error("useOptions must be used within a OptionsProvider");
  }
  return context;
};
function createTags(name, formatFn) {
  const reactName = formatFn(name, {
    outputFormat: "react"
  });
  const defaultName = formatFn(name, {});
  return [reactName, defaultName];
}
const convertFormat$7 = function (name) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (options.outputFormat === "react") return name;
  const separator = "_";
  const prefix = name.replace(/([a-z])([0-9])/i, `$1${separator}$2`);
  return decamelize(prefix, separator);
};
const iconStyle = {
  width: ICON_WIDTH,
  height: ICON_HEIGHT,
  fontSize: "20px"
};
const configuration$7 = {
  title: "Framework7",
  provider: "f7",
  icons: function () {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return Object.keys(F7).map(name => {
      const Component = F7[name];
      return {
        name: convertFormat$7(name, options),
        component: () => /* @__PURE__ */jsx(Component, {
          style: iconStyle
        }),
        tags: createTags(name, convertFormat$7)
      };
    });
  }
};
const convertFormat$6 = function (name) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (options.outputFormat === "react") return name;
  const separator = "-";
  const SPECIAL_NAMES = {
    Draft2Digital: "draft2digital",
    "500Px": "500px"
  };
  const prefix = name.replace(/^(FaReg|Fa)(.*$)/, "$2");
  if (SPECIAL_NAMES[prefix]) return SPECIAL_NAMES[prefix];
  return decamelize(name, separator);
};
const configuration$6 = {
  title: "Font Awesome",
  provider: "fa",
  icons: function () {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return Object.keys(Fa).map(name => {
      const Icon = Fa[name];
      return {
        name: convertFormat$6(name, options),
        component: () => /* @__PURE__ */jsx(Icon, {}),
        tags: createTags(name, convertFormat$6)
      };
    });
  }
};
const convertFormat$5 = function (name) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (options.outputFormat === "react") return name;
  const separator = "-";
  const reactPrefix = name.replace(/^(Fi)(.*$)/, "$2");
  const prefix = reactPrefix.replace(/([a-z])([0-9])/i, `$1${separator}$2`);
  return decamelize(prefix, separator);
};
const configuration$5 = {
  title: "Feather Icons",
  provider: "fi",
  icons: function () {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return Object.keys(Fi).map(name => {
      const Icon = Fi[name];
      return {
        name: convertFormat$5(name, options),
        component: () => /* @__PURE__ */jsx(Icon, {}),
        tags: createTags(name, convertFormat$5)
      };
    });
  }
};
const convertFormat$4 = function (name) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (options.outputFormat === "react") return name;
  const separator = "-";
  const reactPrefix = name.replace(/^(Hi)(.*$)/, "$2");
  const prefix = reactPrefix.replace(/([a-z])([0-9])/i, `$1${separator}$2`);
  return decamelize(prefix, separator);
};
const configuration$4 = {
  title: "Hero Icons",
  provider: "hi",
  icons: function () {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return Object.keys(Hi).map(name => {
      const Icon = Hi[name];
      return {
        name: convertFormat$4(name, options),
        component: () => /* @__PURE__ */jsx(Icon, {}),
        tags: createTags(name, convertFormat$4)
      };
    });
  }
};
const convertFormat$3 = function (name) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (options.outputFormat === "react") return name;
  const separator = "-";
  const reactPrefix = name.replace(/^(Lu)(.*$)/, "$2");
  const prefix = reactPrefix.replace(/([a-z])([0-9])/i, `$1${separator}$2`);
  return decamelize(prefix, separator);
};
const configuration$3 = {
  title: "Lucide Icons",
  provider: "lu",
  icons: function () {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return Object.keys(Lu).map(name => {
      const Icon = Lu[name];
      return {
        name: convertFormat$3(name, options),
        component: () => /* @__PURE__ */jsx(Icon, {}),
        tags: createTags(name, convertFormat$3)
      };
    });
  }
};
const convertFormat$2 = function (name) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (options.outputFormat === "react") return name;
  const separator = "_";
  const reactPrefix = name.replace(/^(Md)(.*$)/, "$2");
  const separateLettersPrefix = reactPrefix.replace(/([a-z])([0-9])/i, `$1${separator}$2`);
  const prefix = separateLettersPrefix.replace(/3D/, match => match.toLowerCase());
  return decamelize(prefix, separator);
};
const configuration$2 = {
  title: "Material Design",
  provider: "mdi",
  icons: function () {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return Object.keys(Mdi).map(name => {
      const Icon = Mdi[name];
      return {
        name: convertFormat$2(name, options),
        component: () => /* @__PURE__ */jsx(Icon, {}),
        tags: createTags(name, convertFormat$2)
      };
    });
  }
};
const AccessDeniedIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "access-denied",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M18.1568 6.84315C21.281 9.96734 21.281 15.0327 18.1568 18.1569C15.0326 21.281 9.96733 21.281 6.84313 18.1569C3.71894 15.0327 3.71894 9.96734 6.84313 6.84315C9.96733 3.71895 15.0326 3.71895 18.1568 6.84315ZM18.1568 6.84315L6.844 18.156",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
AccessDeniedIcon.displayName = "ForwardRef(AccessDeniedIcon)";
const ActivityIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "activity",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M21 15H19L15.5 7L11 18L8 12L6 15H4",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
ActivityIcon.displayName = "ForwardRef(ActivityIcon)";
const AddCircleIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "add-circle",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M8 12.4H17M12.5 8V17M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
AddCircleIcon.displayName = "ForwardRef(AddCircleIcon)";
const AddCommentIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "add-comment",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M13 6.5H7.5C6.39543 6.5 5.5 7.39543 5.5 8.5V14.5C5.5 15.6046 6.39543 16.5 7.5 16.5H9.5V20.5L13.5 16.5H16.5C17.6046 16.5 18.5 15.6046 18.5 14.5V12M15 6.5H22M18.5 10V3",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
AddCommentIcon.displayName = "ForwardRef(AddCommentIcon)";
const AddDocumentIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "add-document",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M11.5 4.5V9.5H6.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M11.5 4.5H18.5V12M11.5 4.5L6.5 9.5M11.5 4.5V9.5H6.5M6.5 9.5V19.5H11M20 17.5H16.5M16.5 17.5H13M16.5 17.5V14M16.5 17.5V21",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
AddDocumentIcon.displayName = "ForwardRef(AddDocumentIcon)";
const AddIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "add",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M12.5 5V20M5 12.5H20",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
AddIcon.displayName = "ForwardRef(AddIcon)";
const AddUserIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "add-user",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M7.17857 15.2368C6.10714 15.7632 4.5 16.8158 4.5 20.5H19.5C19.5 16.8158 18.2589 15.943 16.8214 15.2368C15.75 14.7105 13.6071 14.7105 13.6071 13.1316C13.6071 11.5526 14.6786 10.7632 14.6786 8.65789C14.6786 6.55263 13.6071 5.5 12 5.5C10.3929 5.5 9.32142 6.55263 9.32142 8.65789C9.32142 10.7632 10.3929 11.5526 10.3929 13.1316C10.3929 14.7105 8.25 14.7105 7.17857 15.2368Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M20.5 6V13M17 9.5H24",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
AddUserIcon.displayName = "ForwardRef(AddUserIcon)";
const ApiIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "api",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M5.93047 13.2107L6.66782 10.3728H6.73089L7.45854 13.2107H5.93047ZM8.17164 16H9.66089L7.56041 9H5.93047L3.82999 16H5.20767L5.65396 14.2876H7.73505L8.17164 16Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      d: "M10.5389 9V16H11.9166V13.7782H13.0323C14.541 13.7782 15.5015 12.8517 15.5015 11.3964C15.5015 9.92654 14.5701 9 13.1003 9H10.5389ZM11.9166 10.1303H12.751C13.6533 10.1303 14.1044 10.5475 14.1044 11.3867C14.1044 12.2308 13.6533 12.6431 12.751 12.6431H11.9166V10.1303Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      d: "M21.1675 16V14.8164H19.717V10.1836H21.1675V9H16.8889V10.1836H18.3393V14.8164H16.8889V16H21.1675Z",
      fill: "currentColor"
    })]
  });
});
ApiIcon.displayName = "ForwardRef(ApiIcon)";
const ArchiveIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "archive",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M12.5 10V17M20.5 7.5V20.5H4.5V7.5L7.5 4.5H17.5L20.5 7.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M4.5 7.5H20.5M16 14L12.5 17.5L9 14",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
ArchiveIcon.displayName = "ForwardRef(ArchiveIcon)";
const ArrowDownIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "arrow-down",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M12.5 19.5V5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M18 14L12.5 19.5L7 14",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
ArrowDownIcon.displayName = "ForwardRef(ArrowDownIcon)";
const ArrowLeftIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "arrow-left",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M5.5 12.5H20",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M11 18L5.5 12.5L11 7",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
ArrowLeftIcon.displayName = "ForwardRef(ArrowLeftIcon)";
const ArrowRightIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "arrow-right",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M19.5 12.5H5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M14 7L19.5 12.5L14 18",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
ArrowRightIcon.displayName = "ForwardRef(ArrowRightIcon)";
const ArrowTopRightIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "arrow-top-right",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M16.5 8.5L7 18",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M9 8.5H16.5V16",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
ArrowTopRightIcon.displayName = "ForwardRef(ArrowTopRightIcon)";
const ArrowUpIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "arrow-up",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M7 11L12.5 5.5L18 11",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M12.5 5.5V20",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
ArrowUpIcon.displayName = "ForwardRef(ArrowUpIcon)";
const AsteriskIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "asterisk",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M12.5 4V21M16.75 5.13879L8.25 19.8612M19.8612 8.25L5.13878 16.75M4.00002 12.5H21M5.13881 8.25L19.8612 16.75M8.25002 5.13879L16.75 19.8612",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
AsteriskIcon.displayName = "ForwardRef(AsteriskIcon)";
const BarChartIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "bar-chart",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M5.5 5V19.5H20M8.5 18V13M11.5 18V9M14.5 18V11M17.5 18V7",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
BarChartIcon.displayName = "ForwardRef(BarChartIcon)";
const BasketIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "basket",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M8.5 10.5H5L6.5 19.5H18.5L20 10.5H16.5M8.5 10.5L10.2721 5.18377C10.4082 4.77543 10.7903 4.5 11.2208 4.5H13.7792C14.2097 4.5 14.5918 4.77543 14.7279 5.18377L16.5 10.5M8.5 10.5H16.5M8.5 10.5L9.5 19.5M16.5 10.5L15.5 19.5M12.5 10.5V19.5M19.5 13.5H5.5M19 16.5H6",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
BasketIcon.displayName = "ForwardRef(BasketIcon)";
const BellIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "bell",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M10.5 17.5V18.5C10.5 20 11.5 20.5 12.5 20.5C13.5 20.5 14.5 20 14.5 18.5V17.5M5.5 17.5C6.5 16 6.5 15 6.5 12C6.5 8 8.5 5.5 12.5 5.5C16.5 5.5 18.5 8 18.5 12C18.5 15 18.5 16 19.5 17.5H5.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
BellIcon.displayName = "ForwardRef(BellIcon)";
const BillIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "bill",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M6.50001 5.5C8.50003 5.5 8.50003 8 8.50003 8V9.5M6.50001 5.5C4.5 5.5 4.5 8 4.5 8L4.50001 9.5H8.50003M6.50001 5.5C6.50001 5.5 15.8333 5.5 17.6667 5.5C19.5 5.5 19.5 8.5 19.5 8.5V20L17.6667 19L15.8333 20L14 19L12.1667 20L10.3334 19L8.50003 20V9.5M11 12.5H15M11 9.5H16M11 15.5H16",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
BillIcon.displayName = "ForwardRef(BillIcon)";
const BinaryDocumentIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "binary-document",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M11.5 4.5V9.5H6.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M9.5 12.5V17.5M11.5 4.5H18.5V20.5H6.5V9.5L11.5 4.5ZM12.5 12.5V17.5H15.5V12.5H12.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinecap: "square",
      strokeLinejoin: "round"
    })]
  });
});
BinaryDocumentIcon.displayName = "ForwardRef(BinaryDocumentIcon)";
const BlockContentIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "block-content",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M21 7.60002L11 7.60003V6.40003L21 6.40002V7.60002Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M21 11.2667L12.4833 11.2667V10.0667L21 10.0667V11.2667Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M21 14.9334H13.9254V13.7334L21 13.7334V14.9334Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M21 18.6002H4V17.4002H21V18.6002Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      d: "M9.86438 15.6H11.2L8.27623 7.60003H6.92377L4 15.6H5.29072L6.0371 13.4767H9.12362L9.86438 15.6ZM7.53546 9.05255H7.63086L8.80374 12.4344H6.35698L7.53546 9.05255Z",
      fill: "currentColor"
    })]
  });
});
BlockContentIcon.displayName = "ForwardRef(BlockContentIcon)";
const BlockElementIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "block-element",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M5 19.5H20M5 5.5H20M6.5 8.5H18.5V16.5H6.5V8.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
BlockElementIcon.displayName = "ForwardRef(BlockElementIcon)";
const BlockquoteIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "blockquote",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M10 17.5H19M6 7.5H19M10 12.5H17M6.5 12V18",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
BlockquoteIcon.displayName = "ForwardRef(BlockquoteIcon)";
const BoldIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "bold",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M13.2087 18C15.5322 18 16.9731 16.793 16.9731 14.8844C16.9731 13.4812 15.9245 12.3949 14.4836 12.2892V12.1534C15.6001 11.9875 16.4526 10.9841 16.4526 9.82991C16.4526 8.14761 15.1927 7.11409 13.0804 7.11409H8.32019V18H13.2087ZM10.5985 8.85674H12.4995C13.5859 8.85674 14.212 9.37727 14.212 10.2448C14.212 11.1199 13.5406 11.6254 12.3109 11.6254H10.5985V8.85674ZM10.5985 16.2574V13.1643H12.575C13.9178 13.1643 14.6496 13.6924 14.6496 14.6882C14.6496 15.7066 13.9404 16.2574 12.6278 16.2574H10.5985Z",
      fill: "currentColor"
    })
  });
});
BoldIcon.displayName = "ForwardRef(BoldIcon)";
const BoltIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "bolt",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M18 11.5L9 21L11 13.5H7L16 4L14 11.5H18Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
BoltIcon.displayName = "ForwardRef(BoltIcon)";
const BookIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "book",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M19.5 18V7C19.5 7 18.5 6.5 16.5 6.5C14.5 6.5 12.5 7.5 12.5 7.5M19.5 18V18.5C19.5 18.5 18 18.5 16 18.5C14 18.5 12.5 18.5 12.5 18.5M19.5 18C19.5 18 18.5 17.5 16.5 17.5C14.5 17.5 12.5 18.5 12.5 18.5M5.5 18V7C5.5 7 6.5 6.5 8.5 6.5C10.5 6.5 12.5 7.5 12.5 7.5M5.5 18V18.5C5.5 18.5 7 18.5 9 18.5C11 18.5 12.5 18.5 12.5 18.5M5.5 18C5.5 18 6.5 17.5 8.5 17.5C10.5 17.5 12.5 18.5 12.5 18.5M12.5 18.5V7.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
BookIcon.displayName = "ForwardRef(BookIcon)";
const BookmarkFilledIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "bookmark-filled",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M7.5 6.5V19.5L12.5 14.5L17.5 19.5V6.5C17.5 5.94772 17.0523 5.5 16.5 5.5H8.5C7.94772 5.5 7.5 5.94772 7.5 6.5Z",
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
BookmarkFilledIcon.displayName = "ForwardRef(BookmarkFilledIcon)";
const BookmarkIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "bookmark",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M7.5 6.5V19.5L12.5 14.5L17.5 19.5V6.5C17.5 5.94772 17.0523 5.5 16.5 5.5H8.5C7.94772 5.5 7.5 5.94772 7.5 6.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
BookmarkIcon.displayName = "ForwardRef(BookmarkIcon)";
const BottleIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "bottle",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M7.5 17.5L17.5 17.5M17.5 13C17.5 12.087 17.5 11.3518 17.5 11C17.5 8.5 14.5 9 14.5 7.37494L14.5 5.5M17.5 13C17.5 15.1229 17.5 18.7543 17.5 20.5022C17.5 21.0545 17.0523 21.5 16.5 21.5L8.5 21.5C7.94772 21.5 7.5 21.0547 7.5 20.5024C7.5 18.8157 7.5 15.3546 7.5 13M17.5 13L7.5 13M7.5 13C7.5 12.2538 7.5 11.5648 7.5 11C7.5 8.5 10.5 9 10.5 7.37494L10.5 5.5M10.5 5.5L10.5 3.99999C10.5 3.72385 10.7239 3.49999 11 3.49999L14 3.49999C14.2761 3.49999 14.5 3.72385 14.5 3.99999L14.5 5.5M10.5 5.5L14.5 5.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
BottleIcon.displayName = "ForwardRef(BottleIcon)";
const BugIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "bug",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M8.5 9.5V8.9C8.16863 8.9 7.9 9.16863 7.9 9.5H8.5ZM16.5 9.5H17.1C17.1 9.16863 16.8314 8.9 16.5 8.9V9.5ZM8.5 10.1H9.5V8.9H8.5V10.1ZM9.5 10.1H15.5V8.9H9.5V10.1ZM15.5 10.1H16.5V8.9H15.5V10.1ZM15.9 9.5V13.5H17.1V9.5H15.9ZM15.9 13.5C15.9 14.395 15.678 15.0264 15.3758 15.4797C15.0711 15.9367 14.6605 16.2489 14.2317 16.4633C13.8005 16.6789 13.3621 16.7897 13.0264 16.8457C12.8599 16.8734 12.7226 16.887 12.6291 16.8937C12.5825 16.897 12.5472 16.8986 12.5249 16.8994C12.5138 16.8997 12.506 16.8999 12.5018 16.9C12.4997 16.9 12.4984 16.9 12.4981 16.9C12.498 16.9 12.4981 16.9 12.4984 16.9C12.4985 16.9 12.4987 16.9 12.499 16.9C12.4991 16.9 12.4994 16.9 12.4995 16.9C12.4997 16.9 12.5 16.9 12.5 17.5C12.5 18.1 12.5003 18.1 12.5006 18.1C12.5008 18.1 12.5011 18.1 12.5014 18.1C12.5019 18.1 12.5025 18.1 12.5031 18.1C12.5044 18.1 12.5059 18.1 12.5077 18.1C12.5112 18.0999 12.5157 18.0999 12.5212 18.0998C12.532 18.0996 12.5467 18.0993 12.5649 18.0987C12.6013 18.0975 12.6519 18.0951 12.7146 18.0907C12.8399 18.0817 13.0151 18.0641 13.2236 18.0293C13.6379 17.9603 14.1995 17.8211 14.7683 17.5367C15.3395 17.2511 15.9289 16.8133 16.3742 16.1453C16.822 15.4736 17.1 14.605 17.1 13.5H15.9ZM12.5 17.5C12.5 16.9 12.5003 16.9 12.5005 16.9C12.5006 16.9 12.5009 16.9 12.501 16.9C12.5013 16.9 12.5015 16.9 12.5016 16.9C12.5019 16.9 12.502 16.9 12.5019 16.9C12.5016 16.9 12.5003 16.9 12.4982 16.9C12.494 16.8999 12.4862 16.8997 12.4751 16.8994C12.4528 16.8986 12.4175 16.897 12.3709 16.8937C12.2774 16.887 12.1401 16.8734 11.9736 16.8457C11.6379 16.7897 11.1995 16.6789 10.7683 16.4633C10.3395 16.2489 9.92894 15.9367 9.62423 15.4797C9.32203 15.0264 9.1 14.395 9.1 13.5H7.9C7.9 14.605 8.17797 15.4736 8.62577 16.1453C9.07106 16.8133 9.66049 17.2511 10.2317 17.5367C10.8005 17.8211 11.3621 17.9603 11.7764 18.0293C11.9849 18.0641 12.1601 18.0817 12.2854 18.0907C12.3481 18.0951 12.3987 18.0975 12.4351 18.0987C12.4533 18.0993 12.468 18.0996 12.4788 18.0998C12.4843 18.0999 12.4888 18.0999 12.4923 18.1C12.4941 18.1 12.4956 18.1 12.4969 18.1C12.4975 18.1 12.4981 18.1 12.4986 18.1C12.4989 18.1 12.4992 18.1 12.4994 18.1C12.4997 18.1 12.5 18.1 12.5 17.5ZM9.1 13.5V9.5H7.9V13.5H9.1ZM9.5 9.5C10.1 9.5 10.1 9.50028 10.1 9.50055C10.1 9.50063 10.1 9.50089 10.1 9.50104C10.1 9.50134 10.1 9.5016 10.1 9.50182C10.1 9.50225 10.1 9.5025 10.1 9.50259C10.1 9.50276 10.1 9.50224 10.1 9.50107C10.1001 9.49872 10.1002 9.49374 10.1004 9.4863C10.1009 9.4714 10.102 9.44678 10.1043 9.41384C10.1091 9.34776 10.1188 9.24944 10.1387 9.12989C10.179 8.88793 10.2586 8.5745 10.4117 8.26833C10.5636 7.96451 10.782 7.67894 11.0984 7.46798C11.4111 7.25953 11.855 7.1 12.5 7.1V5.9C11.645 5.9 10.9639 6.11547 10.4328 6.46952C9.90549 6.82106 9.56143 7.28549 9.33834 7.73167C9.11643 8.1755 9.00846 8.61207 8.95504 8.93261C8.92809 9.09431 8.91438 9.23036 8.90738 9.32835C8.90388 9.37744 8.90203 9.41727 8.90107 9.44632C8.90058 9.46085 8.90031 9.47272 8.90017 9.48172C8.9001 9.48622 8.90005 9.49001 8.90003 9.49306C8.90002 9.49459 8.90001 9.49593 8.90001 9.49709C8.9 9.49767 8.9 9.4982 8.9 9.49869C8.9 9.49893 8.9 9.49926 8.9 9.49938C8.9 9.4997 8.9 9.5 9.5 9.5ZM12.5 7.1C13.145 7.1 13.5889 7.25953 13.9016 7.46798C14.218 7.67894 14.4364 7.96451 14.5883 8.26833C14.7414 8.5745 14.821 8.88793 14.8613 9.12989C14.8812 9.24944 14.8909 9.34776 14.8957 9.41384C14.898 9.44678 14.8991 9.4714 14.8996 9.4863C14.8998 9.49374 14.8999 9.49872 14.9 9.50107C14.9 9.50224 14.9 9.50276 14.9 9.50259C14.9 9.5025 14.9 9.50225 14.9 9.50182C14.9 9.5016 14.9 9.50134 14.9 9.50104C14.9 9.50089 14.9 9.50063 14.9 9.50055C14.9 9.50028 14.9 9.5 15.5 9.5C16.1 9.5 16.1 9.4997 16.1 9.49938C16.1 9.49926 16.1 9.49893 16.1 9.49869C16.1 9.4982 16.1 9.49767 16.1 9.49709C16.1 9.49593 16.1 9.49459 16.1 9.49306C16.0999 9.49001 16.0999 9.48622 16.0998 9.48172C16.0997 9.47272 16.0994 9.46085 16.0989 9.44632C16.098 9.41727 16.0961 9.37744 16.0926 9.32835C16.0856 9.23036 16.0719 9.09431 16.045 8.93261C15.9915 8.61207 15.8836 8.1755 15.6617 7.73167C15.4386 7.28549 15.0945 6.82106 14.5672 6.46952C14.0361 6.11547 13.355 5.9 12.5 5.9V7.1ZM11.9 9.5V17.5H13.1V9.5H11.9ZM8.5 9.9C7.71525 9.9 7.10887 9.51034 6.67426 9.07574C6.45859 8.86006 6.29547 8.64279 6.18673 8.47968C6.1327 8.39863 6.09302 8.33235 6.06782 8.28825C6.05524 8.26624 6.04634 8.24988 6.04113 8.24011C6.03853 8.23523 6.03685 8.232 6.0361 8.23055C6.03573 8.22983 6.03559 8.22955 6.03568 8.22973C6.03573 8.22982 6.03583 8.23003 6.03599 8.23035C6.03607 8.23051 6.03617 8.2307 6.03628 8.23092C6.03634 8.23103 6.03643 8.23122 6.03646 8.23127C6.03656 8.23147 6.03666 8.23167 5.5 8.5C4.96334 8.76833 4.96345 8.76855 4.96357 8.76877C4.96361 8.76886 4.96372 8.76909 4.96381 8.76926C4.96398 8.7696 4.96417 8.76997 4.96437 8.77038C4.96478 8.77119 4.96525 8.77212 4.96579 8.77317C4.96685 8.77527 4.96818 8.77786 4.96976 8.78092C4.97292 8.78704 4.9771 8.79505 4.98231 8.80481C4.99272 8.82434 5.00726 8.85094 5.02593 8.88362C5.06323 8.9489 5.1173 9.03887 5.18827 9.14532C5.32953 9.35721 5.54141 9.63994 5.82574 9.92426C6.39113 10.4897 7.28475 11.1 8.5 11.1V9.9ZM16.5 11.1C17.7153 11.1 18.6089 10.4897 19.1743 9.92426C19.4586 9.63994 19.6705 9.35721 19.8117 9.14532C19.8827 9.03887 19.9368 8.9489 19.9741 8.88362C19.9927 8.85094 20.0073 8.82434 20.0177 8.80481C20.0229 8.79505 20.0271 8.78704 20.0302 8.78092C20.0318 8.77786 20.0331 8.77527 20.0342 8.77317C20.0347 8.77212 20.0352 8.77119 20.0356 8.77038C20.0358 8.76997 20.036 8.7696 20.0362 8.76926C20.0363 8.76909 20.0364 8.76886 20.0364 8.76877C20.0365 8.76855 20.0367 8.76833 19.5 8.5C18.9633 8.23167 18.9634 8.23147 18.9635 8.23127C18.9636 8.23122 18.9637 8.23103 18.9637 8.23092C18.9638 8.2307 18.9639 8.23051 18.964 8.23035C18.9642 8.23003 18.9643 8.22982 18.9643 8.22973C18.9644 8.22955 18.9643 8.22983 18.9639 8.23055C18.9632 8.232 18.9615 8.23523 18.9589 8.24011C18.9537 8.24988 18.9448 8.26624 18.9322 8.28825C18.907 8.33235 18.8673 8.39863 18.8133 8.47968C18.7045 8.64279 18.5414 8.86006 18.3257 9.07574C17.8911 9.51034 17.2847 9.9 16.5 9.9V11.1ZM16.5 13.1H20V11.9H16.5V13.1ZM16.5 15.1C17.2847 15.1 17.8911 15.4897 18.3257 15.9243C18.5414 16.1399 18.7045 16.3572 18.8133 16.5203C18.8673 16.6014 18.907 16.6676 18.9322 16.7117C18.9448 16.7338 18.9537 16.7501 18.9589 16.7599C18.9615 16.7648 18.9632 16.768 18.9639 16.7694C18.9643 16.7702 18.9644 16.7705 18.9643 16.7703C18.9643 16.7702 18.9642 16.77 18.964 16.7697C18.9639 16.7695 18.9638 16.7693 18.9637 16.7691C18.9637 16.769 18.9636 16.7688 18.9635 16.7687C18.9634 16.7685 18.9633 16.7683 19.5 16.5C20.0367 16.2317 20.0365 16.2315 20.0364 16.2312C20.0364 16.2311 20.0363 16.2309 20.0362 16.2307C20.036 16.2304 20.0358 16.23 20.0356 16.2296C20.0352 16.2288 20.0347 16.2279 20.0342 16.2268C20.0331 16.2247 20.0318 16.2221 20.0302 16.2191C20.0271 16.213 20.0229 16.205 20.0177 16.1952C20.0073 16.1757 19.9927 16.1491 19.9741 16.1164C19.9368 16.0511 19.8827 15.9611 19.8117 15.8547C19.6705 15.6428 19.4586 15.3601 19.1743 15.0757C18.6089 14.5103 17.7153 13.9 16.5 13.9V15.1ZM8.5 13.9C7.28475 13.9 6.39113 14.5103 5.82574 15.0757C5.54141 15.3601 5.32953 15.6428 5.18827 15.8547C5.1173 15.9611 5.06323 16.0511 5.02593 16.1164C5.00726 16.1491 4.99272 16.1757 4.98231 16.1952C4.9771 16.205 4.97292 16.213 4.96976 16.2191C4.96818 16.2221 4.96685 16.2247 4.96579 16.2268C4.96525 16.2279 4.96478 16.2288 4.96437 16.2296C4.96417 16.23 4.96398 16.2304 4.96381 16.2307C4.96372 16.2309 4.96361 16.2311 4.96357 16.2312C4.96345 16.2315 4.96334 16.2317 5.5 16.5C6.03666 16.7683 6.03656 16.7685 6.03646 16.7687C6.03643 16.7688 6.03634 16.769 6.03628 16.7691C6.03617 16.7693 6.03607 16.7695 6.03599 16.7697C6.03583 16.77 6.03573 16.7702 6.03568 16.7703C6.03559 16.7705 6.03573 16.7702 6.0361 16.7694C6.03685 16.768 6.03853 16.7648 6.04113 16.7599C6.04634 16.7501 6.05524 16.7338 6.06782 16.7117C6.09302 16.6676 6.1327 16.6014 6.18673 16.5203C6.29547 16.3572 6.45859 16.1399 6.67426 15.9243C7.10887 15.4897 7.71525 15.1 8.5 15.1V13.9ZM8.5 11.9H5V13.1H8.5V11.9Z",
      fill: "currentColor"
    })
  });
});
BugIcon.displayName = "ForwardRef(BugIcon)";
const BulbFilledIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "bulb-filled",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M16.4272 14.3368C15.8273 15.1773 15.5 16.1794 15.5 17.212V18.5C15.5 19.0523 15.0523 19.5 14.5 19.5H14V20.5C14 21.0523 13.5523 21.5 13 21.5H12C11.4477 21.5 11 21.0523 11 20.5V19.5H10.5C9.94772 19.5 9.5 19.0523 9.5 18.5V17.212C9.5 16.1794 9.17266 15.1773 8.57284 14.3368C7.60216 12.9767 7 11.94 7 10C7 7 9.5 4.5 12.5 4.5C15.5 4.5 18 7 18 10C18 11.94 17.3978 12.9767 16.4272 14.3368Z",
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  });
});
BulbFilledIcon.displayName = "ForwardRef(BulbFilledIcon)";
const BulbOutlineIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "bulb-outline",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M9.5 16.5H15.5M11 20V20.5C11 21.0523 11.4477 21.5 12 21.5H13C13.5523 21.5 14 21.0523 14 20.5V20M18 10C18 11.94 17.3978 12.9767 16.4272 14.3368C15.8273 15.1773 15.5 16.1794 15.5 17.212V18.5C15.5 19.0523 15.0523 19.5 14.5 19.5H10.5C9.94772 19.5 9.5 19.0523 9.5 18.5V17.212C9.5 16.1794 9.17266 15.1773 8.57284 14.3368C7.60216 12.9767 7 11.94 7 10C7 7 9.5 4.5 12.5 4.5C15.5 4.5 18 7 18 10Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  });
});
BulbOutlineIcon.displayName = "ForwardRef(BulbOutlineIcon)";
const CalendarIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "calendar",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M5.5 18.5H19.5V6.5H5.5V18.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M16.5 8V4M8.5 8V4M8 12.5H10M8 15.5H10M11.5 12.5H13.5M11.5 15.5H13.5M15 12.5H17M15 15.5H17M12.5 8V4M5.5 9.5H19.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
CalendarIcon.displayName = "ForwardRef(CalendarIcon)";
const CaseIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "case",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M9 8.5122V6C9 5.44772 9.44772 5 10 5H15C15.5523 5 16 5.44772 16 6V8.5122M4.5 12V18.5C4.5 19.0523 4.94772 19.5 5.5 19.5H19.5C20.0523 19.5 20.5 19.0523 20.5 18.5V12M4.5 12V9.5122C4.5 8.95991 4.94772 8.5122 5.5 8.5122H19.5C20.0523 8.5122 20.5 8.95991 20.5 9.5122V12M4.5 12L11.7978 14.7367C12.2505 14.9064 12.7495 14.9064 13.2022 14.7367L20.5 12",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
CaseIcon.displayName = "ForwardRef(CaseIcon)";
const ChartUpwardIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "chart-upward",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M5.5 5V19.5H20M7.5 16L11.5 11.5L15.5 14L19.5 8.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
ChartUpwardIcon.displayName = "ForwardRef(ChartUpwardIcon)";
const CheckmarkCircleIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "checkmark-circle",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M9.5 12.1316L11.7414 14.5L16 10M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
CheckmarkCircleIcon.displayName = "ForwardRef(CheckmarkCircleIcon)";
const CheckmarkIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "checkmark",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M5.5 11.5L10.5 16.5L19.5 7.60001",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
CheckmarkIcon.displayName = "ForwardRef(CheckmarkIcon)";
const ChevronDownIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "chevron-down",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M17 10L12.5 14.5L8 10",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
ChevronDownIcon.displayName = "ForwardRef(ChevronDownIcon)";
const ChevronLeftIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "chevron-left",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M15 17L10.5 12.5L15 8",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
ChevronLeftIcon.displayName = "ForwardRef(ChevronLeftIcon)";
const ChevronRightIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "chevron-right",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M10 8L14.5 12.5L10 17",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
ChevronRightIcon.displayName = "ForwardRef(ChevronRightIcon)";
const ChevronUpIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "chevron-up",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M8 15L12.5 10.5L17 15",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
ChevronUpIcon.displayName = "ForwardRef(ChevronUpIcon)";
const CircleIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "circle",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("circle", {
      cx: 12.5,
      cy: 12.5,
      r: 8,
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
CircleIcon.displayName = "ForwardRef(CircleIcon)";
const ClipboardIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "clipboard",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M8 5.5H6.5V19.5H18.5V5.5H17M12.5 3C11.5 3 11.5 4.5 11 4.5C10 4.5 9.5 5 9.5 6.5H15.6C15.6 5 15 4.5 14 4.5C13.5 4.5 13.5 3 12.5 3Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
ClipboardIcon.displayName = "ForwardRef(ClipboardIcon)";
const ClipboardImageIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "clipboard-image",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M8 5.5H6.5V19.5H10.5M17 5.5H18.5V11.5M10.5 18.5L12.73 15.8983C13.1327 15.4285 13.8613 15.4335 14.2575 15.909L15.299 17.1588C15.6754 17.6105 16.3585 17.6415 16.7743 17.2257L16.9903 17.0097C17.2947 16.7053 17.7597 16.6298 18.1447 16.8223L20.5 18M10.5 11.5H20.5V21.5H10.5V11.5ZM12.5 3C11.5 3 11.5 4.5 11 4.5C10 4.5 9.5 5 9.5 6.5H15.6C15.6 5 15 4.5 14 4.5C13.5 4.5 13.5 3 12.5 3Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
ClipboardImageIcon.displayName = "ForwardRef(ClipboardImageIcon)";
const ClockIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "clock",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M12.5 8V12.5L15.5 15.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
ClockIcon.displayName = "ForwardRef(ClockIcon)";
const CloseCircleIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "close-circle",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M9.5 15.5L12.5 12.5M12.5 12.5L15.5 9.5M12.5 12.5L9.5 9.5M12.5 12.5L15.5 15.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
CloseCircleIcon.displayName = "ForwardRef(CloseCircleIcon)";
const CloseIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "close",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M18 7L7 18M7 7L18 18",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
CloseIcon.displayName = "ForwardRef(CloseIcon)";
const CodeBlockIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "code-block",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M11 15L8.5 12.5L11 10M14 10L16.5 12.5L14 15M5.5 6.5H19.5V18.5H5.5V6.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
CodeBlockIcon.displayName = "ForwardRef(CodeBlockIcon)";
const CodeIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "code",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M11 16L7.5 12.5L11 9M14 9L17.5 12.5L14 16",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
CodeIcon.displayName = "ForwardRef(CodeIcon)";
const CogIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "cog",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M14.0666 6.19428L13.719 5.32531C13.5196 4.82685 13.0369 4.5 12.5 4.5C11.9631 4.5 11.4804 4.82685 11.281 5.32531L10.9334 6.19428C10.7984 6.53187 10.5328 6.80068 10.1969 6.93982C9.86098 7.07896 9.48313 7.07666 9.14894 6.93343L8.2887 6.56476C7.79525 6.35328 7.22276 6.46353 6.84315 6.84315C6.46353 7.22276 6.35328 7.79525 6.56476 8.2887L6.93343 9.14894C7.07666 9.48313 7.07896 9.86098 6.93982 10.1969C6.80068 10.5328 6.53187 10.7984 6.19428 10.9334L5.32531 11.281C4.82685 11.4804 4.5 11.9631 4.5 12.5C4.5 13.0369 4.82685 13.5196 5.32531 13.719L6.19428 14.0666C6.53187 14.2016 6.80068 14.4672 6.93982 14.8031C7.07896 15.139 7.07666 15.5169 6.93343 15.8511L6.56476 16.7113C6.35328 17.2048 6.46353 17.7772 6.84315 18.1569C7.22276 18.5365 7.79525 18.6467 8.2887 18.4352L9.14894 18.0666C9.48314 17.9233 9.86099 17.921 10.1969 18.0602C10.5328 18.1993 10.7984 18.4681 10.9334 18.8057L11.281 19.6747C11.4804 20.1732 11.9631 20.5 12.5 20.5C13.0369 20.5 13.5196 20.1731 13.719 19.6747L14.0666 18.8057C14.2016 18.4681 14.4672 18.1993 14.8031 18.0602C15.139 17.921 15.5169 17.9233 15.8511 18.0666L16.7113 18.4352C17.2047 18.6467 17.7772 18.5365 18.1569 18.1569C18.5365 17.7772 18.6467 17.2047 18.4352 16.7113L18.0666 15.8511C17.9233 15.5169 17.921 15.139 18.0602 14.8031C18.1993 14.4672 18.4681 14.2016 18.8057 14.0666L19.6747 13.719C20.1731 13.5196 20.5 13.0369 20.5 12.5C20.5 11.9631 20.1731 11.4804 19.6747 11.281L18.8057 10.9334C18.4681 10.7984 18.1993 10.5328 18.0602 10.1969C17.921 9.86098 17.9233 9.48313 18.0666 9.14894L18.4352 8.2887C18.6467 7.79525 18.5365 7.22276 18.1569 6.84314C17.7772 6.46353 17.2048 6.35328 16.7113 6.56476L15.8511 6.93343C15.5169 7.07666 15.139 7.07896 14.8031 6.93982C14.4672 6.80068 14.2016 6.53187 14.0666 6.19428Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M16 12.5C16 14.433 14.433 16 12.5 16C10.567 16 9 14.433 9 12.5C9 10.567 10.567 9 12.5 9C14.433 9 16 10.567 16 12.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
CogIcon.displayName = "ForwardRef(CogIcon)";
const CollapseIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "collapse",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M6 14.5L10.5 14.5V19M19 10.5H14.5L14.5 6",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M10.5 14.5L6 19M14.5 10.5L19 6",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
CollapseIcon.displayName = "ForwardRef(CollapseIcon)";
const ColorWheelIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "color-wheel",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M9.43853 5.10896L11.1606 9.26642M13.8394 15.7336L15.5615 19.891M15.7336 11.1606L19.891 9.43853M9.26642 13.8394L5.10896 15.5615M5.3139 9.52342L9.23359 11.147M15.7664 13.853L19.6861 15.4766M13.853 9.23359L15.4766 5.3139M9.52342 19.6861L11.147 15.7664M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5ZM16 12.5C16 14.433 14.433 16 12.5 16C10.567 16 9 14.433 9 12.5C9 10.567 10.567 9 12.5 9C14.433 9 16 10.567 16 12.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
ColorWheelIcon.displayName = "ForwardRef(ColorWheelIcon)";
const CommentIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "comment",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M7.5 16.5H9.5V20.5L13.5 16.5H17.5C18.6046 16.5 19.5 15.6046 19.5 14.5V8.5C19.5 7.39543 18.6046 6.5 17.5 6.5H7.5C6.39543 6.5 5.5 7.39543 5.5 8.5V14.5C5.5 15.6046 6.39543 16.5 7.5 16.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
CommentIcon.displayName = "ForwardRef(CommentIcon)";
const ComponentIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "component",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M8.5 8.5L12.5 12.5M12.5 12.5L16.5 16.5M12.5 12.5L16.5 8.5M12.5 12.5L8.5 16.5M12.5 4L21 12.5L12.5 21L4 12.5L12.5 4Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
ComponentIcon.displayName = "ForwardRef(ComponentIcon)";
const ComposeIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "compose",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M17 6L19 8M14 5.5H5.5V19.5H19.5V11M9 16L9.5 13.5L19 4L21 6L11.5 15.5L9 16Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
ComposeIcon.displayName = "ForwardRef(ComposeIcon)";
const ComposeSparklesIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "compose-sparkles",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M11 3.5V5M11 5V6.5M11 5H12.5M11 5H9.5M17 9L9.5 16.5L9 19L11.5 18.5L19 11M17 9L19 7L21 9L19 11M17 9L19 11M4.5 10C4.5 10 5.72308 9.87692 6.3 9.3C6.87692 8.72308 7 7.5 7 7.5C7 7.5 7.12308 8.72308 7.7 9.3C8.27692 9.87692 9.5 10 9.5 10C9.5 10 8.27692 10.1231 7.7 10.7C7.12308 11.2769 7 12.5 7 12.5C7 12.5 6.87692 11.2769 6.3 10.7C5.72308 10.1231 4.5 10 4.5 10Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })
  });
});
ComposeSparklesIcon.displayName = "ForwardRef(ComposeSparklesIcon)";
const ConfettiIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "confetti",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M16.5 6.25C16.9142 6.25 17.25 5.91421 17.25 5.5C17.25 5.08579 16.9142 4.75 16.5 4.75C16.0858 4.75 15.75 5.08579 15.75 5.5C15.75 5.91421 16.0858 6.25 16.5 6.25Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      d: "M19.5 16.25C19.9142 16.25 20.25 15.9142 20.25 15.5C20.25 15.0858 19.9142 14.75 19.5 14.75C19.0858 14.75 18.75 15.0858 18.75 15.5C18.75 15.9142 19.0858 16.25 19.5 16.25Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      d: "M13 4C11 6 14.5 5.5 12.5 7.5M21 12C19 14 19.5 10.5 17.5 12.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M16.066 16.4904C15.3965 17.1598 13.1126 15.9613 10.9647 13.8135C8.81684 11.6656 7.61835 9.38165 8.28782 8.71218M16.066 16.4904C16.7355 15.8209 15.537 13.537 13.3891 11.3891C11.2412 9.2412 8.95729 8.04271 8.28782 8.71218M16.066 16.4904C15.8661 16.6902 15.6277 16.8474 15.3657 16.952L6.99288 20.296C6.26931 20.5849 5.44878 20.4193 4.9038 19.8744C4.35883 19.3294 4.19324 18.5089 4.48221 17.7853L7.82614 9.41242C7.93077 9.15042 8.08793 8.91208 8.28782 8.71218M20 5C20 14 11.5 5.32688 11.5 14.3269",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
ConfettiIcon.displayName = "ForwardRef(ConfettiIcon)";
const ControlsIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "controls",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M6.5 5V7.5M6.5 7.5C5.39543 7.5 4.5 8.39543 4.5 9.5C4.5 10.6046 5.39543 11.5 6.5 11.5M6.5 7.5C7.60457 7.5 8.5 8.39543 8.5 9.5C8.5 10.6046 7.60457 11.5 6.5 11.5M6.5 11.5V20M12.5 5V13.5M12.5 13.5C11.3954 13.5 10.5 14.3954 10.5 15.5C10.5 16.6046 11.3954 17.5 12.5 17.5M12.5 13.5C13.6046 13.5 14.5 14.3954 14.5 15.5C14.5 16.6046 13.6046 17.5 12.5 17.5M12.5 17.5V20M18.5 5V7.5M18.5 7.5C17.3954 7.5 16.5 8.39543 16.5 9.5C16.5 10.6046 17.3954 11.5 18.5 11.5M18.5 7.5C19.6046 7.5 20.5 8.39543 20.5 9.5C20.5 10.6046 19.6046 11.5 18.5 11.5M18.5 11.5V20",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
ControlsIcon.displayName = "ForwardRef(ControlsIcon)";
const CopyIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "copy",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M8.5 8.5H5.5V20.5H16.5V16.5M19.5 4.5H8.5V16.5H19.5V4.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
CopyIcon.displayName = "ForwardRef(CopyIcon)";
const CreditCardIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "credit-card",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M20.5 9.5H4.5V11.5H20.5V9.5Z",
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M7 15.5H14M5.5 18.5H19.5C20.0523 18.5 20.5 18.0523 20.5 17.5V7.5C20.5 6.94772 20.0523 6.5 19.5 6.5H5.5C4.94772 6.5 4.5 6.94772 4.5 7.5V17.5C4.5 18.0523 4.94772 18.5 5.5 18.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
CreditCardIcon.displayName = "ForwardRef(CreditCardIcon)";
const CropIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "crop",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M9.5 5V15.5H20M5 9.5H15.5V20",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
CropIcon.displayName = "ForwardRef(CropIcon)";
const CubeIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "cube",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M4.5 8L12.5 3L20.5 8V17L12.5 22L4.5 17V8Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M12.5 22V13M12.5 13L4.5 8M12.5 13L20.5 8",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
CubeIcon.displayName = "ForwardRef(CubeIcon)";
const DashboardIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "dashboard",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M14.5 19.5V12.5M10.5 12.5V5.5M5.5 12.5H19.5M5.5 19.5H19.5V5.5H5.5V19.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
DashboardIcon.displayName = "ForwardRef(DashboardIcon)";
const DatabaseIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "database",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M18.5 7V17.5C18.5 19.0594 16.0504 20.5 12.5 20.5C8.9496 20.5 6.5 19.0594 6.5 17.5V7M18.5 7C18.5 8.45543 15.8137 9.5 12.5 9.5C9.18629 9.5 6.5 8.45543 6.5 7C6.5 5.54457 9.18629 4.5 12.5 4.5C15.8137 4.5 18.5 5.54457 18.5 7Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
DatabaseIcon.displayName = "ForwardRef(DatabaseIcon)";
const DesktopIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "desktop",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M4.5 13.5V15.5C4.5 16.0523 4.94772 16.5 5.5 16.5H12.5M4.5 13.5V6.5C4.5 5.94772 4.94772 5.5 5.5 5.5H19.5C20.0523 5.5 20.5 5.94772 20.5 6.5V13.5M4.5 13.5H20.5M20.5 13.5V15.5C20.5 16.0523 20.0523 16.5 19.5 16.5H12.5M12.5 16.5V19.5M12.5 19.5H8M12.5 19.5H17",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
DesktopIcon.displayName = "ForwardRef(DesktopIcon)";
const DiamondIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "diamond",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M21 10.5L12.5 21M21 10.5L18 5.5H11M21 10.5H16M12.5 21L4 10.5M12.5 21L9 10.5M12.5 21L16 10.5M4 10.5L7 5.5H11M4 10.5H9M9 10.5H12.5H16M9 10.5L11 5.5M16 10.5L14.5 5.5H11",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
DiamondIcon.displayName = "ForwardRef(DiamondIcon)";
const DocumentIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "document",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M11.5 4.5V9.5H6.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M18.5 20.5H6.5V9.5L11.5 4.5H18.5V20.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
DocumentIcon.displayName = "ForwardRef(DocumentIcon)";
const DocumentPdfIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "document-pdf",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M12.7127 13.8012L12.7193 13.77C12.8488 13.2366 13.0117 12.5716 12.8845 11.969C12.7997 11.4937 12.4493 11.3084 12.1503 11.295C11.7977 11.2794 11.483 11.4803 11.4049 11.7726C11.2576 12.3082 11.3893 13.0402 11.6303 13.973C11.3268 14.6961 10.8425 15.7472 10.4877 16.3721C9.8271 16.7135 8.94113 17.2402 8.80946 17.9053C8.78268 18.028 8.81392 18.1842 8.88757 18.3248C8.97014 18.481 9.10181 18.6015 9.25579 18.6596C9.32274 18.6841 9.40308 18.7042 9.49681 18.7042C9.88959 18.7042 10.5256 18.3873 11.3736 16.9322C11.5031 16.8898 11.637 16.8452 11.7664 16.8006C12.3734 16.5953 13.0028 16.381 13.5718 16.2851C14.2012 16.622 14.9175 16.8385 15.404 16.8385C15.8861 16.8385 16.0758 16.5529 16.1472 16.381C16.2722 16.0797 16.2119 15.7004 16.0088 15.4973C15.7143 15.2072 14.9979 15.1313 13.882 15.2696C13.3331 14.9349 12.9738 14.4796 12.7127 13.8012ZM10.2645 17.1911C9.95431 17.6419 9.71998 17.8673 9.59278 17.9655C9.7423 17.691 10.0346 17.4009 10.2645 17.1911ZM12.2195 11.9355C12.3355 12.1341 12.3199 12.7345 12.2306 13.038C12.1213 12.5939 12.1056 11.9645 12.1704 11.8909L12.2195 11.9355ZM12.1837 14.6247C12.4225 15.0376 12.7238 15.3924 13.0563 15.6557C12.5743 15.7651 12.1346 15.9458 11.7419 16.1065C11.6481 16.1445 11.5566 16.1824 11.4674 16.2181C11.7642 15.6803 12.0119 15.071 12.1837 14.6247ZM15.6562 16.0864L15.6428 16.1065C15.6428 16.1065 15.4375 16.2315 14.6497 15.9213C15.5558 15.8789 15.6562 16.0864 15.6562 16.0864Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      d: "M11.5 4.5V9.5H6.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M11.5 4.5H18.5V20.5H6.5V9.5L11.5 4.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
DocumentPdfIcon.displayName = "ForwardRef(DocumentPdfIcon)";
const DocumentRemoveIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "document-remove",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M11.5 4.5V9.5H6.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M6.5 14V20.5H18.5V14M6.5 11V9.5L11.5 4.5H18.5V11M3 12.5H22",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
DocumentRemoveIcon.displayName = "ForwardRef(DocumentRemoveIcon)";
const DocumentSheetIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "document-sheet",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M11.5 4.5V9.5H6.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M10.4 19V16.4M10.4 16.4L10.4 13.4M10.4 16.4H8M10.4 16.4H14.4M10.4 13.4V11M10.4 13.4H8M10.4 13.4H14.4M14.4 19V16.4M14.4 16.4V13.4M14.4 16.4H17M14.4 13.4V11M14.4 13.4H17M11.5 4.5H18.5V20.5H6.5V9.5L11.5 4.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
DocumentSheetIcon.displayName = "ForwardRef(DocumentSheetIcon)";
const DocumentTextIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "document-text",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M11.5 4.5V9.5H6.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M16 13H9M14 16H9M11.5 4.5H18.5V20.5H6.5V9.5L11.5 4.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
DocumentTextIcon.displayName = "ForwardRef(DocumentTextIcon)";
const DocumentVideoIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "document-video",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M11.5 16.5V13.5L14 15L11.5 16.5Z",
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */jsx("path", {
      d: "M11.5 4.5V9.5H6.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M11.5 4.5H18.5V20.5H6.5V9.5L11.5 4.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
DocumentVideoIcon.displayName = "ForwardRef(DocumentVideoIcon)";
const DocumentWordIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "document-word",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M12.4699 13.4588H12.5263L13.6328 17H14.5435L16 12H14.9952L14.0656 15.7214H14.0129L12.929 12H12.0672L10.9984 15.7214H10.9419L10.0124 12H9L10.4565 17H11.371L12.4699 13.4588Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      d: "M11.5 4.5V9.5H6.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M11.5 4.5H18.5V20.5H6.5V9.5L11.5 4.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
DocumentWordIcon.displayName = "ForwardRef(DocumentWordIcon)";
const DocumentZipIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "document-zip",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M11.5 4.5V9.5H6.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M15 4.5L13.5 5L15.5 6L13.5 7L15.5 8L13.5 9L15.5 10L13.5 11L14.5 11.5V13M11.5 4.5H18.5V20.5H6.5V9.5L11.5 4.5ZM13.5 13H15.5L16 17H13L13.5 13Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
DocumentZipIcon.displayName = "ForwardRef(DocumentZipIcon)";
const DocumentsIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "documents",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M10.5 4.5V9.5H5.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M16.5 7.5H19.5V21.5H8.5V18.5M10.5 4.5H16.5V18.5H5.5V9.5L10.5 4.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
DocumentsIcon.displayName = "ForwardRef(DocumentsIcon)";
const DotIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "dot",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("circle", {
      cx: 12.5,
      cy: 12.5,
      r: 2.5,
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  });
});
DotIcon.displayName = "ForwardRef(DotIcon)";
const DoubleChevronDownIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "double-chevron-down",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M17 7.5C15.6332 8.86683 12.5 12 12.5 12L8 7.5M17 12.5C15.6332 13.8668 12.5 17 12.5 17L8 12.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
DoubleChevronDownIcon.displayName = "ForwardRef(DoubleChevronDownIcon)";
const DoubleChevronLeftIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "double-chevron-left",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M12.5 17L8 12.5L12.5 8M17.5 17L13 12.5L17.5 8",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
DoubleChevronLeftIcon.displayName = "ForwardRef(DoubleChevronLeftIcon)";
const DoubleChevronRightIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "double-chevron-right",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M12.5 8L17 12.5L12.5 17M7.5 8L12 12.5L7.5 17",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
DoubleChevronRightIcon.displayName = "ForwardRef(DoubleChevronRightIcon)";
const DoubleChevronUpIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "double-chevron-up",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M8 12.5L12.5 8L17 12.5M8 17.5L12.5 13L17 17.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
DoubleChevronUpIcon.displayName = "ForwardRef(DoubleChevronUpIcon)";
const DownloadIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "download",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M19.5 17V19.5H5.5V17M12.5 16L12.5 5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M17.5 11L12.5 16L7.5 11",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
DownloadIcon.displayName = "ForwardRef(DownloadIcon)";
const DragHandleIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "drag-handle",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M9.5 8C10.3284 8 11 7.32843 11 6.5C11 5.67157 10.3284 5 9.5 5C8.67157 5 8 5.67157 8 6.5C8 7.32843 8.67157 8 9.5 8Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      d: "M9.5 14C10.3284 14 11 13.3284 11 12.5C11 11.6716 10.3284 11 9.5 11C8.67157 11 8 11.6716 8 12.5C8 13.3284 8.67157 14 9.5 14Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      d: "M11 18.5C11 19.3284 10.3284 20 9.5 20C8.67157 20 8 19.3284 8 18.5C8 17.6716 8.67157 17 9.5 17C10.3284 17 11 17.6716 11 18.5Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      d: "M15.5 8C16.3284 8 17 7.32843 17 6.5C17 5.67157 16.3284 5 15.5 5C14.6716 5 14 5.67157 14 6.5C14 7.32843 14.6716 8 15.5 8Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      d: "M17 12.5C17 13.3284 16.3284 14 15.5 14C14.6716 14 14 13.3284 14 12.5C14 11.6716 14.6716 11 15.5 11C16.3284 11 17 11.6716 17 12.5Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      d: "M15.5 20C16.3284 20 17 19.3284 17 18.5C17 17.6716 16.3284 17 15.5 17C14.6716 17 14 17.6716 14 18.5C14 19.3284 14.6716 20 15.5 20Z",
      fill: "currentColor"
    })]
  });
});
DragHandleIcon.displayName = "ForwardRef(DragHandleIcon)";
const DropIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "drop",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M18.5 14.5C18.5 18 16 20.5 12.5 20.5C9 20.5 6.5 18 6.5 14.5C6.5 11 9.5 7.50001 12.5 4.5C15.5 7.5 18.5 11 18.5 14.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
DropIcon.displayName = "ForwardRef(DropIcon)";
const EarthAmericasIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "earth-americas",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M7 13L5.5 9L10 5H15V10L14 9H11L9.5 11L10.5 12H12V13L13 14.5H15.5L18.5 17L15.5 19.5L10.5 20V17L12.5 15L9 13L7 10.5V13Z",
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("circle", {
      cx: 12.5,
      cy: 12.5,
      r: 8,
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
EarthAmericasIcon.displayName = "ForwardRef(EarthAmericasIcon)";
const EarthGlobeIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "earth-globe",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M20.5 12.5H4.5M12.5 20.5C12.5 20.5 9.5 17.5 9.5 12.5C9.5 7.5 12.5 4.5 12.5 4.5C12.5 4.5 15.5 7.5 15.5 12.5C15.5 17.5 12.5 20.5 12.5 20.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
EarthGlobeIcon.displayName = "ForwardRef(EarthGlobeIcon)";
const EditIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "edit",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M15 7L18 10M6 19L7 15L17 5L20 8L10 18L6 19Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
EditIcon.displayName = "ForwardRef(EditIcon)";
const EllipsisHorizontalIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "ellipsis-horizontal",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M6.5 11C7.32843 11 8 11.6716 8 12.5C8 13.3284 7.32843 14 6.5 14C5.67157 14 5 13.3284 5 12.5C5 11.6716 5.67157 11 6.5 11Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      d: "M12.5 11C13.3284 11 14 11.6716 14 12.5C14 13.3284 13.3284 14 12.5 14C11.6716 14 11 13.3284 11 12.5C11 11.6716 11.6716 11 12.5 11Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      d: "M18.5 11C19.3284 11 20 11.6716 20 12.5C20 13.3284 19.3284 14 18.5 14C17.6716 14 17 13.3284 17 12.5C17 11.6716 17.6716 11 18.5 11Z",
      fill: "currentColor"
    })]
  });
});
EllipsisHorizontalIcon.displayName = "ForwardRef(EllipsisHorizontalIcon)";
const EllipsisVerticalIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "ellipsis-vertical",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M14 6.5C14 7.32843 13.3284 8 12.5 8C11.6716 8 11 7.32843 11 6.5C11 5.67157 11.6716 5 12.5 5C13.3284 5 14 5.67157 14 6.5Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      d: "M14 12.5C14 13.3284 13.3284 14 12.5 14C11.6716 14 11 13.3284 11 12.5C11 11.6716 11.6716 11 12.5 11C13.3284 11 14 11.6716 14 12.5Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      d: "M14 18.5C14 19.3284 13.3284 20 12.5 20C11.6716 20 11 19.3284 11 18.5C11 17.6716 11.6716 17 12.5 17C13.3284 17 14 17.6716 14 18.5Z",
      fill: "currentColor"
    })]
  });
});
EllipsisVerticalIcon.displayName = "ForwardRef(EllipsisVerticalIcon)";
const EmptyIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "empty",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M12.5 21V19.1111M8.25 19.8614L9.19445 18.2255M5.13878 16.7501L6.77461 15.8057M4 12.5H5.8889M5.13872 8.2499L6.77455 9.19436M8.25004 5.13876L9.19449 6.7746M12.5 5.88891V4M15.8055 6.77465L16.75 5.1388M18.2254 9.19449L19.8612 8.25004M19.1111 12.5001H21M18.2254 15.8056L19.8612 16.7501M15.8056 18.2255L16.75 19.8614",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  });
});
EmptyIcon.displayName = "ForwardRef(EmptyIcon)";
const EnterIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "enter",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M6 14.5H19.5V7",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M10 18.5L6 14.5L10 10.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
EnterIcon.displayName = "ForwardRef(EnterIcon)";
const EnterRightIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "enter-right",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M19 14.5H5.5V7",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M15 18.5L19 14.5L15 10.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
EnterRightIcon.displayName = "ForwardRef(EnterRightIcon)";
const EnvelopeIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "envelope",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M20.5 18.5H4.5V6.5H20.5V18.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M20.5 18.5L17.75 15.5L15 12.5M4.5 18.5L10 12.5M20.5 6.5L12.5 15L4.5 6.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
EnvelopeIcon.displayName = "ForwardRef(EnvelopeIcon)";
const EqualIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "equal",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M7.5 4.5H3.5V20.5H7.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */jsx("path", {
      d: "M17.5 20.5L21.5 20.5L21.5 4.5L17.5 4.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */jsx("path", {
      d: "M9 10.5H16",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */jsx("path", {
      d: "M9 14.5H16",
      stroke: "currentColor",
      strokeWidth: 1.2
    })]
  });
});
EqualIcon.displayName = "ForwardRef(EqualIcon)";
const ErrorFilledIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "error-filled",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4 12.5C4 7.80558 7.80558 4 12.5 4C17.1944 4 21 7.80558 21 12.5C21 17.1944 17.1944 21 12.5 21C7.80558 21 4 17.1944 4 12.5ZM13 14.5V16H12V14.5H13ZM12 9V13H13V9H12Z",
      fill: "currentColor"
    })
  });
});
ErrorFilledIcon.displayName = "ForwardRef(ErrorFilledIcon)";
const ErrorOutlineIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "error-outline",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M12.5 16V14.5M12.5 9V13M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
ErrorOutlineIcon.displayName = "ForwardRef(ErrorOutlineIcon)";
const ErrorScreenIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "error-screen",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M10 8.5L15 13.5M15 8.5L10 13.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M12.5 16.5H5.5C4.94772 16.5 4.5 16.0523 4.5 15.5V6.5C4.5 5.94771 4.94772 5.5 5.5 5.5H19.5C20.0523 5.5 20.5 5.94772 20.5 6.5V15.5C20.5 16.0523 20.0523 16.5 19.5 16.5H12.5ZM12.5 16.5V19.5M12.5 19.5H8M12.5 19.5H17",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
ErrorScreenIcon.displayName = "ForwardRef(ErrorScreenIcon)";
const ExpandIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "expand",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M14 6.5H18.5V11M11 18.5H6.5V14",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M18.5 6.5L14 11M6.5 18.5L11 14",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
ExpandIcon.displayName = "ForwardRef(ExpandIcon)";
const EyeClosedIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "eye-closed",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M7 15.5L5.5 17.5M20.5 12.5C19.8612 13.5647 19.041 14.6294 18.0008 15.501M18.0008 15.501C16.5985 16.676 14.7965 17.5 12.5 17.5M18.0008 15.501L18 15.5M18.0008 15.501L19.5 17.5M12.5 17.5C8.5 17.5 6 15 4.5 12.5M12.5 17.5V20M15.5 17L16.5 19.5M9.5 17L8.5 19.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
EyeClosedIcon.displayName = "ForwardRef(EyeClosedIcon)";
const EyeOpenIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "eye-open",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9.39999 12.5C9.39999 10.7879 10.7879 9.39999 12.5 9.39999C14.2121 9.39999 15.6 10.7879 15.6 12.5C15.6 14.2121 14.2121 15.6 12.5 15.6C10.7879 15.6 9.39999 14.2121 9.39999 12.5Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      d: "M12.5 7.5C8.5 7.5 6 10 4.5 12.5C6 15 8.5 17.5 12.5 17.5C16.5 17.5 19 15 20.5 12.5C19 10 16.5 7.5 12.5 7.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
EyeOpenIcon.displayName = "ForwardRef(EyeOpenIcon)";
const FaceHappyIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "face-happy",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M10.5 9V12M14.5 9V12M8.5 14C8.5 14 9.50001 16.5 12.5 16.5C15.5 16.5 16.5 14 16.5 14M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
FaceHappyIcon.displayName = "ForwardRef(FaceHappyIcon)";
const FaceIndifferentIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "face-indifferent",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M10.5 9V12M14.5 9V12M8.5 15.5C8.5 15.5 9.50001 15.5 12.5 15.5C15.5 15.5 16.5 15.5 16.5 15.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
FaceIndifferentIcon.displayName = "ForwardRef(FaceIndifferentIcon)";
const FaceSadIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "face-sad",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M10.5 9V12M14.5 9V12M8.5 16.5C8.5 16.5 9.50001 14.5 12.5 14.5C15.5 14.5 16.5 16.5 16.5 16.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
FaceSadIcon.displayName = "ForwardRef(FaceSadIcon)";
const FeedbackIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "feedback",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M10 11.5V12H9.5L9.5 11.5H10Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      d: "M13 11.5V12H12.5V11.5H13Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      d: "M16 11.5V12H15.5V11.5H16Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      d: "M10 11.5V12H9.5L9.5 11.5H10Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M13 11.5V12H12.5V11.5H13Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M16 11.5V12H15.5V11.5H16Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M7.5 16.5H9.5V20.5L13.5 16.5H17.5C18.6046 16.5 19.5 15.6046 19.5 14.5V8.5C19.5 7.39543 18.6046 6.5 17.5 6.5H7.5C6.39543 6.5 5.5 7.39543 5.5 8.5V14.5C5.5 15.6046 6.39543 16.5 7.5 16.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
FeedbackIcon.displayName = "ForwardRef(FeedbackIcon)";
const FilterIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "filter",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M6 7.5H19M8 12.5H17M10 17.5H15",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
FilterIcon.displayName = "ForwardRef(FilterIcon)";
const FolderIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "folder",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M11.5 8.5H19.5V18.5H5.5V5.5H10.5L11.5 8.5ZM11.5 8.5H5.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
FolderIcon.displayName = "ForwardRef(FolderIcon)";
const GenerateIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "generate",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M9 5.30423C6.33576 6.60253 4.5 9.33688 4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5V14.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M16 11L12.5 14.5L9 11",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
GenerateIcon.displayName = "ForwardRef(GenerateIcon)";
const GithubIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "github",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.507 4C7.80286 4 4 7.8309 4 12.5702C4 16.3587 6.43663 19.5655 9.81687 20.7005C10.2395 20.7858 10.3943 20.5161 10.3943 20.2892C10.3943 20.0905 10.3804 19.4094 10.3804 18.6999C8.01391 19.2108 7.52112 17.6782 7.52112 17.6782C7.14081 16.685 6.57732 16.4297 6.57732 16.4297C5.80279 15.9047 6.63374 15.9047 6.63374 15.9047C7.49291 15.9615 7.94374 16.7844 7.94374 16.7844C8.70417 18.0897 9.92953 17.7209 10.4225 17.4938C10.4929 16.9404 10.7184 16.5573 10.9578 16.3445C9.07037 16.1459 7.08457 15.4081 7.08457 12.1161C7.08457 11.1796 7.42239 10.4134 7.95767 9.81757C7.87321 9.60478 7.57736 8.72489 8.04229 7.54724C8.04229 7.54724 8.76059 7.32017 10.3802 8.42695C11.0736 8.23935 11.7887 8.14392 12.507 8.14312C13.2253 8.14312 13.9576 8.24255 14.6337 8.42695C16.2535 7.32017 16.9718 7.54724 16.9718 7.54724C17.4367 8.72489 17.1407 9.60478 17.0562 9.81757C17.6056 10.4134 17.9295 11.1796 17.9295 12.1161C17.9295 15.4081 15.9437 16.1316 14.0422 16.3445C14.3521 16.6141 14.6196 17.1248 14.6196 17.9337C14.6196 19.0829 14.6057 20.0053 14.6057 20.289C14.6057 20.5161 14.7606 20.7858 15.1831 20.7006C18.5633 19.5653 21 16.3587 21 12.5702C21.0139 7.8309 17.1971 4 12.507 4Z",
      fill: "currentColor"
    })
  });
});
GithubIcon.displayName = "ForwardRef(GithubIcon)";
const GroqIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "groq",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M13 13H21L13 21L13 13Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      d: "M12 12V4L4 12H12Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      d: "M12 13H4L12 21V13Z",
      fill: "currentColor"
    })]
  });
});
GroqIcon.displayName = "ForwardRef(GroqIcon)";
const HashIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "hash",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.33894 16.1002H5.44615L5.63077 14.9002H8.52356L9.26202 10.1002H6.36923L6.55384 8.90018H9.44663L9.89281 6H11.1069L10.6608 8.90018H15.4466L15.8928 6H17.1069L16.6608 8.90018H19.5539L19.3693 10.1002H16.4761L15.7377 14.9002H18.6308L18.4462 16.1002H15.5531L15.1069 19H13.8928L14.3389 16.1002H9.55306L9.10693 19H7.89281L8.33894 16.1002ZM10.4761 10.1002L9.73767 14.9002H14.5236L15.262 10.1002H10.4761Z",
      fill: "currentColor"
    })
  });
});
HashIcon.displayName = "ForwardRef(HashIcon)";
const HeartFilledIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "heart-filled",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M17 16C15.8 17.3235 12.5 20.5 12.5 20.5C12.5 20.5 9.2 17.3235 8 16C5.2 12.9118 4.5 11.7059 4.5 9.5C4.5 7.29412 6.1 5.5 8.5 5.5C10.5 5.5 11.7 6.82353 12.5 8.14706C13.3 6.82353 14.5 5.5 16.5 5.5C18.9 5.5 20.5 7.29412 20.5 9.5C20.5 11.7059 19.8 12.9118 17 16Z",
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
HeartFilledIcon.displayName = "ForwardRef(HeartFilledIcon)";
const HeartIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "heart",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M17 16C15.8 17.3235 12.5 20.5 12.5 20.5C12.5 20.5 9.2 17.3235 8 16C5.2 12.9118 4.5 11.7059 4.5 9.5C4.5 7.29412 6.1 5.5 8.5 5.5C10.5 5.5 11.7 6.82353 12.5 8.14706C13.3 6.82353 14.5 5.5 16.5 5.5C18.9 5.5 20.5 7.29412 20.5 9.5C20.5 11.7059 19.8 12.9118 17 16Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
HeartIcon.displayName = "ForwardRef(HeartIcon)";
const HelpCircleIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "help-circle",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M12.5 13C12.5 11 14 11.5 14 10C14 9.34375 13.5 8.5 12.5 8.5C11.5 8.5 11 9 10.5 9.5M12.5 16V14.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
HelpCircleIcon.displayName = "ForwardRef(HelpCircleIcon)";
const HighlightIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "highlight",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M17.5311 13.7141L8.02451 8.22547M17.5311 13.7141L20.25 9.00478M17.5311 13.7141L16.5 15.5L13.232 16.134L12 18L11.4142 17.6485M8.02451 8.22547L10.75 3.50479M8.02451 8.22547L6.99999 9.99998L7.99999 13L6.99999 15L7.58576 15.3514M7.58576 15.3514L4.90192 20L10.0566 20L11.4142 17.6485M7.58576 15.3514L11.4142 17.6485M13 20H20",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
HighlightIcon.displayName = "ForwardRef(HighlightIcon)";
const HomeIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "home",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M14.5 18.5V12.5H10.5V18.5M5.5 11.5V18.5H19.5V11.5L12.5 5.5L5.5 11.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
HomeIcon.displayName = "ForwardRef(HomeIcon)";
const IceCreamIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "ice-cream",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M9.5 13.5L12.5 20.5L15.5 13.5M12.5 8.26389C11.9692 7.78885 11.2684 7.5 10.5 7.5C8.84315 7.5 7.5 8.84315 7.5 10.5C7.5 12.1569 8.84315 13.5 10.5 13.5C11.2684 13.5 11.9692 13.2111 12.5 12.7361M9.5 7.5C9.5 5.84315 10.8431 4.5 12.5 4.5C14.1569 4.5 15.5 5.84315 15.5 7.5M17.5 10.5C17.5 12.1569 16.1569 13.5 14.5 13.5C12.8431 13.5 11.5 12.1569 11.5 10.5C11.5 8.84315 12.8431 7.5 14.5 7.5C16.1569 7.5 17.5 8.84315 17.5 10.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
IceCreamIcon.displayName = "ForwardRef(IceCreamIcon)";
const ImageIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "image",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M5.5 15.5L8.79289 12.2071C9.18342 11.8166 9.81658 11.8166 10.2071 12.2071L12.8867 14.8867C13.2386 15.2386 13.7957 15.2782 14.1938 14.9796L15.1192 14.2856C15.3601 14.1049 15.6696 14.0424 15.9618 14.1154L19.5 15M5.5 6.5H19.5V18.5H5.5V6.5ZM15.5 10.5C15.5 11.0523 15.0523 11.5 14.5 11.5C13.9477 11.5 13.5 11.0523 13.5 10.5C13.5 9.94772 13.9477 9.5 14.5 9.5C15.0523 9.5 15.5 9.94772 15.5 10.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
ImageIcon.displayName = "ForwardRef(ImageIcon)";
const ImageRemoveIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "image-remove",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M5.5 11V6.5H19.5V11M5.5 14V18.5H19.5V14M3 12.5H22",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
ImageRemoveIcon.displayName = "ForwardRef(ImageRemoveIcon)";
const ImagesIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "images",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M18.5 7.5H20.5V19.5H6.5V17.5M4.5 14.5L7.79289 11.2071C8.18342 10.8166 8.81658 10.8166 9.20711 11.2071L11.8867 13.8867C12.2386 14.2386 12.7957 14.2782 13.1938 13.9796L14.1192 13.2856C14.3601 13.1049 14.6696 13.0424 14.9618 13.1154L18.5 14M4.5 5.5H18.5V17.5H4.5V5.5ZM14.5 9.5C14.5 10.0523 14.0523 10.5 13.5 10.5C12.9477 10.5 12.5 10.0523 12.5 9.5C12.5 8.94772 12.9477 8.5 13.5 8.5C14.0523 8.5 14.5 8.94772 14.5 9.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
ImagesIcon.displayName = "ForwardRef(ImagesIcon)";
const InboxIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "inbox",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M9 8.5H8.17703C7.76813 8.5 7.40042 8.74895 7.24856 9.12861L5.5 13.5M5.5 13.5V17.5C5.5 18.0523 5.94302 18.5 6.4953 18.5C9.00381 18.5 15.5919 18.5 18.504 18.5C19.0563 18.5 19.5 18.0523 19.5 17.5V13.5M5.5 13.5H8.5L10 15.5H15L16.5 13.5H19.5M19.5 13.5L17.7514 9.12861C17.5996 8.74895 17.2319 8.5 16.823 8.5H16M12.5 5V12.5M12.5 12.5L15 10M12.5 12.5L10 10",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
InboxIcon.displayName = "ForwardRef(InboxIcon)";
const InfoFilledIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "info-filled",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M21 12.5C21 17.1944 17.1944 21 12.5 21C7.80558 21 4 17.1944 4 12.5C4 7.80558 7.80558 4 12.5 4C17.1944 4 21 7.80558 21 12.5ZM12 10.5V9H13V10.5H12ZM13 16V12H12V16H13Z",
      fill: "currentColor"
    })
  });
});
InfoFilledIcon.displayName = "ForwardRef(InfoFilledIcon)";
const InfoOutlineIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "info-outline",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M12.5 10.5V9M12.5 12V16M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
InfoOutlineIcon.displayName = "ForwardRef(InfoOutlineIcon)";
const InlineElementIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "inline-element",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M5.5 5V20M19.5 5V20M8.5 6.5H16.5V18.5H8.5V6.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
InlineElementIcon.displayName = "ForwardRef(InlineElementIcon)";
const InlineIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "inline",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M12.5 6.5H19.5V18.5H12.5M12.5 6.5H5.5V18.5H12.5M12.5 6.5V18.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
InlineIcon.displayName = "ForwardRef(InlineIcon)";
const InsertAboveIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "insert-above",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M14.5 10.5556L10.5 10.5556M12.5 12.5L12.5 8.5M18.5 5.5L6.5 5.5M18.5 19.5L6.5 19.5L6.5 15.5L18.5 15.5L18.5 19.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinecap: "square",
      strokeLinejoin: "round"
    })
  });
});
InsertAboveIcon.displayName = "ForwardRef(InsertAboveIcon)";
const InsertBelowIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "insert-below",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M10.5 14.5H14.5M12.5 12.5V16.5M6.5 19.5H18.5M6.5 5.5H18.5V9.5H6.5V5.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinecap: "square",
      strokeLinejoin: "round"
    })
  });
});
InsertBelowIcon.displayName = "ForwardRef(InsertBelowIcon)";
const ItalicIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "italic",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M10.43 18H11.7276L13.4551 9.86763H12.1576L10.43 18ZM13.3042 8.29849C13.8021 8.29849 14.2095 7.89112 14.2095 7.39322C14.2095 6.89532 13.8021 6.48795 13.3042 6.48795C12.8063 6.48795 12.399 6.89532 12.399 7.39322C12.399 7.89112 12.8063 8.29849 13.3042 8.29849Z",
      fill: "currentColor"
    })
  });
});
ItalicIcon.displayName = "ForwardRef(ItalicIcon)";
const JoystickIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "joystick",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M9.5 16V14.5H15.5V16M13.5 10.5V14.5M11.5 10.5V14.5M15.5 7.5C15.5 9.15685 14.1569 10.5 12.5 10.5C10.8431 10.5 9.5 9.15685 9.5 7.5C9.5 5.84315 10.8431 4.5 12.5 4.5C14.1569 4.5 15.5 5.84315 15.5 7.5ZM18.5 19.5H6.5C5.94772 19.5 5.5 19.0523 5.5 18.5V17.5C5.5 16.9477 5.94772 16.5 6.5 16.5H18.5C19.0523 16.5 19.5 16.9477 19.5 17.5V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
JoystickIcon.displayName = "ForwardRef(JoystickIcon)";
const JsonIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "json",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M11 5.5H9.5C8.39543 5.5 7.5 6.39543 7.5 7.5V12.5M7.5 12.5H4M7.5 12.5V17.5C7.5 18.6046 8.39543 19.5 9.5 19.5H11M14 5.5H15.5C16.6046 5.5 17.5 6.39543 17.5 7.5V12.5M17.5 12.5H21M17.5 12.5V17.5C17.5 18.6046 16.6046 19.5 15.5 19.5H14",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
JsonIcon.displayName = "ForwardRef(JsonIcon)";
const LaunchIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "launch",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M12 7.5H6.5V18.5H17.5V13M19.5 5.5L10.5 14.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M14 5.5H19.5V11",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
LaunchIcon.displayName = "ForwardRef(LaunchIcon)";
const LeaveIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "leave",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M14.5 15V18.5H5.5V6.5H14.5V10M9 12.5H21.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M18 9L21.5 12.5L18 16",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
LeaveIcon.displayName = "ForwardRef(LeaveIcon)";
const LemonIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "lemon",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M10.6569 10.3431L6.41422 14.5858C7.58579 15.7574 9.12132 16.3431 10.6569 16.3431M10.6569 10.3431L14.8995 6.1005C16.0711 7.27208 16.6569 8.80761 16.6569 10.3431M10.6569 10.3431L10.6569 16.3431M10.6569 10.3431L16.6569 10.3431M10.6569 10.3431L14.8995 14.5858M14.8995 14.5858C13.7279 15.7574 12.1924 16.3431 10.6569 16.3431M14.8995 14.5858C16.0711 13.4142 16.6569 11.8787 16.6569 10.3431M16.3137 4.68629C19.4379 7.81049 19.4379 12.8758 16.3137 16C13.1895 19.1242 8.12419 19.1242 5 16L16.3137 4.68629Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
LemonIcon.displayName = "ForwardRef(LemonIcon)";
const LinkIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "link",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M11 12.5L12.5 14C13.281 14.781 14.719 14.781 15.5 14L18.5 11C19.281 10.219 19.281 8.78105 18.5 8L18 7.5C17.2189 6.71895 15.781 6.71895 15 7.5L13 9.5M12 15.5L10 17.5C9.21895 18.281 7.78105 18.281 7 17.5L6.5 17C5.71895 16.219 5.71896 14.781 6.5 14L9.50001 11C10.2811 10.219 11.719 10.2189 12.5 11L14 12.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
LinkIcon.displayName = "ForwardRef(LinkIcon)";
const LinkRemovedIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "link-removed",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M18.5 11C19.281 10.219 19.281 8.78108 18.5 8.00003L18 7.50003C17.2189 6.71898 15.781 6.71898 15 7.50003L13 9.50003M15.5 14C14.7189 14.7811 13.281 14.7811 12.5 14M6.5 14C5.71895 14.7811 5.71894 16.219 6.49999 17L6.99999 17.5C7.78104 18.2811 9.21894 18.2811 9.99999 17.5L12 15.5M12.5 11C11.719 10.219 10.281 10.219 9.5 11M3 12.5H22",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
LinkRemovedIcon.displayName = "ForwardRef(LinkRemovedIcon)";
const LinkedinIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "linkedin",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M20.0249 20H16.9137V15.1278C16.9137 13.9659 16.893 12.4704 15.2956 12.4704C13.6753 12.4704 13.4273 13.7362 13.4273 15.0432V19.9997H10.3162V9.98042H13.3028V11.3496H13.3447C13.6436 10.8386 14.0755 10.4182 14.5944 10.1332C15.1134 9.8482 15.6999 9.7092 16.2915 9.7312C19.4448 9.7312 20.0262 11.8054 20.0262 14.5036L20.0249 20ZM6.80572 8.6109C6.44863 8.6109 6.0996 8.50507 5.80265 8.30683C5.50571 8.10848 5.27427 7.82653 5.13757 7.4967C5.00086 7.16677 4.96502 6.80378 5.03463 6.45356C5.10423 6.10334 5.27613 5.78157 5.52858 5.52903C5.78103 5.2765 6.10271 5.10448 6.45293 5.03476C6.80315 4.96502 7.16614 5.00072 7.49607 5.13731C7.826 5.2739 8.10796 5.50526 8.30641 5.80212C8.50486 6.09894 8.6108 6.44798 8.6109 6.80507C8.6109 7.04216 8.56422 7.277 8.47352 7.49606C8.38283 7.71512 8.24995 7.91422 8.0823 8.08187C7.91466 8.24952 7.71567 8.3826 7.4966 8.4733C7.27765 8.5641 7.04281 8.61079 6.80572 8.6109ZM8.36136 20H5.24695V9.98042H8.36136V20Z",
      fill: "currentColor"
    })
  });
});
LinkedinIcon.displayName = "ForwardRef(LinkedinIcon)";
const ListIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "list",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M6 6.5H19M6 14.5H19M6 10.5H19M6 18.5H19",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
ListIcon.displayName = "ForwardRef(ListIcon)";
const LockIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "lock",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M15.5 11.5V8.5C15.5 6.5 14 5.5 12.5 5.5C11 5.5 9.5 6.5 9.5 8.5V11.5M7.5 11.5H17.5V19.5H7.5V11.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
LockIcon.displayName = "ForwardRef(LockIcon)";
const LogoJsIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "logo-js",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M20 5H5V20H20V5ZM12.5254 16.1572C12.5254 17.4189 11.7742 18.1536 10.4792 18.1536C9.24243 18.1536 8.49121 17.4189 8.45801 16.2942V16.261H9.67407V16.2859C9.69897 16.7466 9.9729 17.0703 10.4626 17.0703C10.9939 17.0703 11.272 16.7507 11.272 16.1489V12.011H12.5254V16.1572ZM18.2893 16.2153C18.2893 17.4023 17.3679 18.1536 15.8738 18.1536C14.4419 18.1536 13.5371 17.4688 13.4666 16.4062L13.4624 16.3398H14.6702L14.6743 16.3813C14.72 16.8296 15.2056 17.1326 15.907 17.1326C16.5752 17.1326 17.0359 16.813 17.0359 16.3523V16.3481C17.0359 15.9539 16.7412 15.7339 15.9983 15.5803L15.3674 15.4517C14.1223 15.1985 13.5869 14.6174 13.5869 13.7085V13.7043C13.5869 12.592 14.5415 11.8574 15.8696 11.8574C17.2683 11.8574 18.0901 12.5962 18.1689 13.5964L18.1731 13.6504H16.9944L16.9861 13.6006C16.9155 13.1731 16.5005 12.8743 15.8696 12.8743C15.2512 12.8784 14.8403 13.1606 14.8403 13.6089V13.613C14.8403 14.0032 15.1309 14.2356 15.8364 14.3809L16.4714 14.5095C17.7373 14.771 18.2893 15.2773 18.2893 16.2112V16.2153Z",
      fill: "currentColor"
    })
  });
});
LogoJsIcon.displayName = "ForwardRef(LogoJsIcon)";
const LogoTsIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "logo-ts",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M20 5H5V20H20V5ZM11.0769 18H9.82349V13.0444H8.02637V12.011H12.874V13.0444H11.0769V18ZM18.2893 16.2153C18.2893 17.4023 17.3679 18.1536 15.8738 18.1536C14.4419 18.1536 13.5371 17.4688 13.4666 16.4062L13.4624 16.3398H14.6702L14.6743 16.3813C14.72 16.8296 15.2056 17.1326 15.907 17.1326C16.5752 17.1326 17.0359 16.813 17.0359 16.3523V16.3481C17.0359 15.9539 16.7412 15.7339 15.9983 15.5803L15.3674 15.4517C14.1223 15.1985 13.5869 14.6174 13.5869 13.7085V13.7043C13.5869 12.592 14.5415 11.8574 15.8696 11.8574C17.2683 11.8574 18.0901 12.5962 18.1689 13.5964L18.1731 13.6504H16.9944L16.9861 13.6006C16.9155 13.1731 16.5005 12.8743 15.8696 12.8743C15.2512 12.8784 14.8403 13.1606 14.8403 13.6089V13.613C14.8403 14.0032 15.1309 14.2356 15.8364 14.3809L16.4714 14.5095C17.7373 14.771 18.2893 15.2773 18.2893 16.2112V16.2153Z",
      fill: "currentColor"
    })
  });
});
LogoTsIcon.displayName = "ForwardRef(LogoTsIcon)";
const MarkerIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "marker",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M6.5 10.5C6.5 7 9 4.5 12.5 4.5C16 4.5 18.5 7 18.5 10.5C18.5 14 15.5 17.5 12.5 20.5C9.5 17.5 6.5 14 6.5 10.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M14 10.5C14 11.3284 13.3284 12 12.5 12C11.6716 12 11 11.3284 11 10.5C11 9.67157 11.6716 9 12.5 9C13.3284 9 14 9.67157 14 10.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
MarkerIcon.displayName = "ForwardRef(MarkerIcon)";
const MarkerRemovedIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "marker-removed",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M7.39787 14C8.51075 16.2897 10.5054 18.5054 12.5 20.5C14.4946 18.5054 16.4892 16.2897 17.6021 14M6.52009 11C6.50681 10.8334 6.5 10.6667 6.5 10.5C6.5 7 9 4.5 12.5 4.5C16 4.5 18.5 7 18.5 10.5C18.5 10.6667 18.4932 10.8334 18.4799 11M3 12.5H22",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
MarkerRemovedIcon.displayName = "ForwardRef(MarkerRemovedIcon)";
const MasterDetailIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "master-detail",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M9.5 6.5V10.5M9.5 10.5V14.5M9.5 10.5H5.5M9.5 14.5V18.5M9.5 14.5H5.5M5.5 6.5H19.5V18.5H5.5V6.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
MasterDetailIcon.displayName = "ForwardRef(MasterDetailIcon)";
const MenuIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "menu",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M6 7.5H19M6 17.5H19M6 12.5H19",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
MenuIcon.displayName = "ForwardRef(MenuIcon)";
const MicrophoneIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "microphone",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M12.5 16.5C15.8137 16.5 18.5 13.8137 18.5 10.5V10M12.5 16.5C9.18629 16.5 6.5 13.8137 6.5 10.5V10M12.5 16.5V20.5M8 20.5H17M15.5 10.5C15.5 12.1569 14.1569 13.5 12.5 13.5C10.8431 13.5 9.5 12.1569 9.5 10.5V7.5C9.5 5.84315 10.8431 4.5 12.5 4.5C14.1569 4.5 15.5 5.84315 15.5 7.5V10.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  });
});
MicrophoneIcon.displayName = "ForwardRef(MicrophoneIcon)";
const MicrophoneSlashIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "microphone-slash",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M17.8162 14.412C18.6231 13.3173 19.1 11.9644 19.1 10.5V10H17.9V10.5C17.9 11.6324 17.5514 12.6834 16.9557 13.5516L17.8162 14.412Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      d: "M14.2171 15.6213L15.1446 16.5488C14.5091 16.8271 13.8213 17.0081 13.1 17.0731V19.9H17V21.1H7.99999V19.9H11.9V17.0731C8.53609 16.77 5.89999 13.9429 5.89999 10.5V10H7.09999V10.5C7.09999 13.4824 9.51766 15.9 12.5 15.9C13.1003 15.9 13.6777 15.8021 14.2171 15.6213Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      d: "M15.6494 12.2453C15.9365 11.7283 16.1 11.1333 16.1 10.5V7.50002C16.1 5.5118 14.4882 3.90002 12.5 3.90002C11.0945 3.90002 9.87704 4.70551 9.2842 5.88007L10.2038 6.79966C10.5035 5.81583 11.4181 5.10002 12.5 5.10002C13.8255 5.10002 14.9 6.17454 14.9 7.50002V10.5C14.9 10.7968 14.8461 11.0811 14.7476 11.3435L15.6494 12.2453Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      d: "M8.89999 10.3042L12.6909 14.0951C12.6277 14.0984 12.564 14.1 12.5 14.1C10.5118 14.1 8.89999 12.4882 8.89999 10.5V10.3042Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      d: "M19 18L6 5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
MicrophoneSlashIcon.displayName = "ForwardRef(MicrophoneSlashIcon)";
const MobileDeviceIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "mobile-device",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M7.5 6.5C7.5 5.39543 8.39543 4.5 9.5 4.5H15.5C16.6046 4.5 17.5 5.39543 17.5 6.5V18.5C17.5 19.6046 16.6046 20.5 15.5 20.5H9.5C8.39543 20.5 7.5 19.6046 7.5 18.5V6.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M13.5 17.5C13.5 18.0523 13.0523 18.5 12.5 18.5C11.9477 18.5 11.5 18.0523 11.5 17.5C11.5 16.9477 11.9477 16.5 12.5 16.5C13.0523 16.5 13.5 16.9477 13.5 17.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
MobileDeviceIcon.displayName = "ForwardRef(MobileDeviceIcon)";
const MoonIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "moon",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M19.6065 16.1775C18.9417 16.387 18.234 16.5 17.5 16.5C13.634 16.5 10.5 13.366 10.5 9.5C10.5 7.54163 11.3042 5.77109 12.6004 4.50062C12.567 4.50021 12.5335 4.5 12.5 4.5C8.08172 4.5 4.5 8.08172 4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C15.5924 20.5 18.275 18.7454 19.6065 16.1775Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
MoonIcon.displayName = "ForwardRef(MoonIcon)";
const NumberIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "number",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M21.0165 17.6336H3.83636V16.4336H21.0165V17.6336Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      d: "M7.09808 13.3967V7.508H5.74066L3.83636 8.78241V10.091L5.65277 8.88495H5.74066V13.3967H3.84125V14.5539H8.89984V13.3967H7.09808Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      d: "M9.81781 9.63202V9.66132H11.1069V9.62714C11.1069 8.95331 11.5756 8.49432 12.2739 8.49432C12.9575 8.49432 13.4018 8.89471 13.4018 9.50507C13.4018 9.9787 13.1528 10.3498 12.1909 11.3117L9.89594 13.5822V14.5539H14.8618V13.3869H11.7807V13.299L13.1577 11.9855C14.3491 10.843 14.7543 10.1838 14.7543 9.41229C14.7543 8.19159 13.7729 7.36639 12.3178 7.36639C10.8383 7.36639 9.81781 8.28436 9.81781 9.63202Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      d: "M17.6694 11.4631H18.5092C19.3198 11.4631 19.8422 11.8683 19.8422 12.4982C19.8422 13.1183 19.3295 13.5139 18.5239 13.5139C17.767 13.5139 17.2592 13.133 17.2104 12.5324H15.9262C15.9897 13.8508 17.0248 14.6955 18.5629 14.6955C20.1401 14.6955 21.2192 13.841 21.2192 12.591C21.2192 11.6584 20.6528 11.0334 19.7006 10.9211V10.8332C20.4721 10.6769 20.9457 10.0666 20.9457 9.23651C20.9457 8.12323 19.9741 7.36639 18.5434 7.36639C17.0541 7.36639 16.1118 8.17694 16.0629 9.50018H17.2983C17.3422 8.88007 17.8061 8.48456 18.4995 8.48456C19.2075 8.48456 19.6567 8.85565 19.6567 9.44159C19.6567 10.0324 19.1977 10.4182 18.4946 10.4182H17.6694V11.4631Z",
      fill: "currentColor"
    })]
  });
});
NumberIcon.displayName = "ForwardRef(NumberIcon)";
const OkHandIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "ok-hand",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M15.9957 11.5C14.8197 10.912 11.9957 9 10.4957 9C8.9957 9 5.17825 11.7674 6 13C7 14.5 9.15134 11.7256 10.4957 12C11.8401 12.2744 13 13.5 13 14.5C13 15.5 11.8401 16.939 10.4957 16.5C9.15134 16.061 8.58665 14.3415 7.4957 14C6.21272 13.5984 5.05843 14.6168 5.5 15.5C5.94157 16.3832 7.10688 17.6006 8.4957 19C9.74229 20.2561 11.9957 21.5 14.9957 20C17.9957 18.5 18.5 16.2498 18.5 13C18.5 11.5 13.7332 5.36875 11.9957 4.5C10.9957 4 10 5 10.9957 6.5C11.614 7.43149 13.5 9.27705 14 10.3751M15.5 8C15.5 8 15.3707 7.5 14.9957 6C14.4957 4 15.9957 3.5 16.4957 4.5C17.1281 5.76491 18.2872 10.9147 18.4957 13",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
OkHandIcon.displayName = "ForwardRef(OkHandIcon)";
const OlistIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "olist",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M10 7.5H19M10 12.5H19M10 17.5H19M5 18.5H7.5L7 17.5L7.5 16.5H5M5 6.5H6.5V8.5M5 8.5H6.5M6.5 8.5H8M8 13.5H6L7 11.5H5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
OlistIcon.displayName = "ForwardRef(OlistIcon)";
const OverageIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "overage",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M18.5 11V6.5H14",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M6.5 18.5L9 16L12 13L18.5 6.5M3 13.5H22",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
OverageIcon.displayName = "ForwardRef(OverageIcon)";
const PackageIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "package",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M12.5 13V22M12.5 13L4.5 8M12.5 13L20.5 8M8.5 5.5L16.5 10.5M4.5 8L12.5 3L20.5 8V17L12.5 22L4.5 17V8Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
PackageIcon.displayName = "ForwardRef(PackageIcon)";
const PanelLeftIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "panel-left",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M10.5 6.5H19.5V18.5H10.5M10.5 6.5H5.5V18.5H10.5M10.5 6.5V18.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
PanelLeftIcon.displayName = "ForwardRef(PanelLeftIcon)";
const PanelRightIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "panel-right",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M14.5 6.5H19.5V18.5H14.5M14.5 6.5H5.5V18.5H14.5M14.5 6.5V18.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
PanelRightIcon.displayName = "ForwardRef(PanelRightIcon)";
const PauseIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "pause",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M10.5 7.5H8.5V17.5H10.5V7.5Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      d: "M16.5 7.5H14.5V17.5H16.5V7.5Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      d: "M10.5 7.5H8.5V17.5H10.5V7.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */jsx("path", {
      d: "M16.5 7.5H14.5V17.5H16.5V7.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })]
  });
});
PauseIcon.displayName = "ForwardRef(PauseIcon)";
const PinFilledIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "pin-filled",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M17 15H8V13.5C8 12 10.5 11 10.5 11V9L8.5 7V6H16.5V7L14.5 9V11C14.5 11 17 12 17 13.5V15Z",
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M12 15L12.5 20L13 15",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
PinFilledIcon.displayName = "ForwardRef(PinFilledIcon)";
const PinIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "pin",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M12 15L12.5 20L13 15",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M17 15H8V13.5C8 12 10.5 11 10.5 11V9L8.5 7V6H16.5V7L14.5 9V11C14.5 11 17 12 17 13.5V15Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
PinIcon.displayName = "ForwardRef(PinIcon)";
const PinRemovedIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "pin-removed",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M7.39787 14C8.51075 16.2897 10.5054 18.5054 12.5 20.5C14.4946 18.5054 16.4892 16.2897 17.6021 14M6.52009 11C6.50681 10.8334 6.5 10.6667 6.5 10.5C6.5 7 9 4.5 12.5 4.5C16 4.5 18.5 7 18.5 10.5C18.5 10.6667 18.4932 10.8334 18.4799 11M3 12.5H22",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
PinRemovedIcon.displayName = "ForwardRef(PinRemovedIcon)";
const PlayIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "play",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M7.5 18.5V6.5L17.5 12.5L7.5 18.5Z",
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
PlayIcon.displayName = "ForwardRef(PlayIcon)";
const PlugIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "plug",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M13.25 8.5L16.75 5M16.25 11.5L19.75 8M9.25 15.5L5.25 19.5M7.75 14L9.75 12C8.25 10 8.75 9 9.75 8C10.15 7.6 11.25 6.5 11.25 6.5L18.25 13.5C18.25 13.5 17.3825 14.3675 16.75 15C15.75 16 14.75 16.5 12.75 15L10.75 17L7.75 14Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
PlugIcon.displayName = "ForwardRef(PlugIcon)";
const PresentationIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "presentation",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M10.5 18H5.5V8.5H19.5V18H14.5M10.5 18L9 22M10.5 18H14.5M14.5 18L16 22M4.5 8.5H20.5V6.5H4.5V8.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
PresentationIcon.displayName = "ForwardRef(PresentationIcon)";
const Progress50Icon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "progress-50",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M17 12.5C17 14.9853 14.9853 17 12.5 17V8C14.9853 8 17 10.0147 17 12.5Z",
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5C8.08172 4.5 4.5 8.08172 4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
Progress50Icon.displayName = "ForwardRef(Progress50Icon)";
const Progress75Icon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "progress-75",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M12.5 17C14.9853 17 17 14.9853 17 12.5C17 10.0147 14.9853 8 12.5 8V12.5H8C8 14.9853 10.0147 17 12.5 17Z",
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
Progress75Icon.displayName = "ForwardRef(Progress75Icon)";
const ProjectsIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "projects",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M21 17.5H14M17.5 14V21M5.5 14.5H10.5V19.5H5.5V14.5ZM14.5 5.5H19.5V10.5H14.5V5.5ZM5.5 5.5H10.5V10.5H5.5V5.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
ProjectsIcon.displayName = "ForwardRef(ProjectsIcon)";
const PublishIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "publish",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M4.99997 5.50006H20M12.5 9.00005V20",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M7.5 14L12.5 9.00006L17.5 14",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
PublishIcon.displayName = "ForwardRef(PublishIcon)";
const ReadOnlyIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "read-only",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M15 7L18 10M10 12L7 15L6 19L10 18L13 15M12 10L17 5L20 8L15 13M19 19L5 5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
ReadOnlyIcon.displayName = "ForwardRef(ReadOnlyIcon)";
const RedoIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "redo",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M19 9.5L10 9.5C7.51472 9.5 5.5 11.5147 5.5 14C5.5 16.4853 7.51472 18.5 10 18.5H19",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M15 13.5L19 9.5L15 5.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
RedoIcon.displayName = "ForwardRef(RedoIcon)";
const RefreshIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "refresh",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M19.5 13.5C19.5 17.366 16.366 20.5 12.5 20.5C8.63401 20.5 5.5 17.366 5.5 13.5C5.5 9.63401 8.63401 6.5 12.5 6.5H15.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M11.5 10.5L15.5 6.5L11.5 2.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
RefreshIcon.displayName = "ForwardRef(RefreshIcon)";
const RemoveCircleIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "remove-circle",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M8 12.4H17M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
RemoveCircleIcon.displayName = "ForwardRef(RemoveCircleIcon)";
const RemoveIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "remove",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M5 12.5H20",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
RemoveIcon.displayName = "ForwardRef(RemoveIcon)";
const ResetIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "reset",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M7 11L4.56189 13.5L2 11",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M9.50001 15.5L15.5 9.5M9.5 9.5L15.5 15.5M4.56189 13.5C4.52104 13.1724 4.5 12.8387 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C9.75033 20.5 7.32466 19.1128 5.88468 17",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
ResetIcon.displayName = "ForwardRef(ResetIcon)";
const RestoreIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "restore",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M5.88468 17C7.32466 19.1128 9.75033 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5C8.08172 4.5 4.5 8.08172 4.5 12.5V13.5M12.5 8V12.5L15.5 15.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M7 11L4.5 13.5L2 11",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
RestoreIcon.displayName = "ForwardRef(RestoreIcon)";
const RetrieveIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "retrieve",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M16 14L12.5 10.5L9 14M5.5 7.5H19.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M12.5 10.5L12.5 17.5M19.5 7.5V19.5H5.5V7.5L7.5 5.5H17.5L19.5 7.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
RetrieveIcon.displayName = "ForwardRef(RetrieveIcon)";
const RetryIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "retry",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M19 9.5L10 9.5C7.51472 9.5 5.5 11.5147 5.5 14C5.5 16.4853 7.51472 18.5 10 18.5H19",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M15 13.5L19 9.5L15 5.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
RetryIcon.displayName = "ForwardRef(RetryIcon)";
const RevertIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "revert",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M6 9.5L15 9.5C17.4853 9.5 19.5 11.5147 19.5 14C19.5 16.4853 17.4853 18.5 15 18.5H6",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M10 13.5L6 9.5L10 5.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
RevertIcon.displayName = "ForwardRef(RevertIcon)";
const RobotIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "robot",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M12.5 15.5V17.5M12.5 8.5V6.5M12.5 6.5C13.3284 6.5 14 5.82843 14 5C14 4.17157 13.3284 3.5 12.5 3.5C11.6716 3.5 11 4.17157 11 5C11 5.82843 11.6716 6.5 12.5 6.5ZM20.5 20.5V19.5C20.5 18.3954 19.6046 17.5 18.5 17.5H6.5C5.39543 17.5 4.5 18.3954 4.5 19.5V20.5H20.5ZM11.5 12C11.5 12.5523 11.0523 13 10.5 13C9.94772 13 9.5 12.5523 9.5 12C9.5 11.4477 9.94772 11 10.5 11C11.0523 11 11.5 11.4477 11.5 12ZM15.5 12C15.5 12.5523 15.0523 13 14.5 13C13.9477 13 13.5 12.5523 13.5 12C13.5 11.4477 13.9477 11 14.5 11C15.0523 11 15.5 11.4477 15.5 12ZM8.5 15.5H16.5C17.6046 15.5 18.5 14.6046 18.5 13.5V10.5C18.5 9.39543 17.6046 8.5 16.5 8.5H8.5C7.39543 8.5 6.5 9.39543 6.5 10.5V13.5C6.5 14.6046 7.39543 15.5 8.5 15.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
RobotIcon.displayName = "ForwardRef(RobotIcon)";
const RocketIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "rocket",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M12.5 20.5L15.5 14M11 9.49999L4.5 12.5M9 14C9 14 7.54688 14.9531 6.5 16C5.5 17 4.5 20.5 4.5 20.5C4.5 20.5 8 19.5 9 18.5C10 17.5 11 16 11 16M9 14C9 14 10.1 9.9 12.5 7.5C15.5 4.5 20.5 4.5 20.5 4.5C20.5 4.5 20.5 9.5 17.5 12.5C15.7492 14.2508 11 16 11 16L9 14ZM16.5 9.99999C16.5 10.8284 15.8284 11.5 15 11.5C14.1716 11.5 13.5 10.8284 13.5 9.99999C13.5 9.17157 14.1716 8.49999 15 8.49999C15.8284 8.49999 16.5 9.17157 16.5 9.99999Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
RocketIcon.displayName = "ForwardRef(RocketIcon)";
const SchemaIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "schema",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M12.5 9.5V12.5M12.5 12.5H8.5V15.5M12.5 12.5H16.5V15.5M10.5 5.5H14.5V9.5H10.5V5.5ZM6.5 15.5H10.5V19.5H6.5V15.5ZM14.5 15.5H18.5V19.5H14.5V15.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
SchemaIcon.displayName = "ForwardRef(SchemaIcon)";
const SearchIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "search",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M15.0355 15.0355L20 20M16.5 11.5C16.5 14.2614 14.2614 16.5 11.5 16.5C8.73858 16.5 6.5 14.2614 6.5 11.5C6.5 8.73858 8.73858 6.5 11.5 6.5C14.2614 6.5 16.5 8.73858 16.5 11.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
SearchIcon.displayName = "ForwardRef(SearchIcon)";
const SelectIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "select",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M16 15L12.5 18.5L9 15M9 10L12.5 6.5L16 10",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
SelectIcon.displayName = "ForwardRef(SelectIcon)";
const ShareIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "share",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M15 10.5H18.5V19.5H6.5L6.5 10.5H10M12.5 16V3.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M9 7L12.5 3.5L16 7",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
ShareIcon.displayName = "ForwardRef(ShareIcon)";
const SortIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "sort",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M8.5 18.5V6M16.5 19V6.5M12 15L8.5 18.5L5 15M13 10L16.5 6.5L20 10",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
SortIcon.displayName = "ForwardRef(SortIcon)";
const SparkleIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "sparkle",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M10.5 10.5C8.5 12.5 5 12.5 5 12.5C5 12.5 8.5 12.5 10.5 14.5C12.5 16.5 12.5 20 12.5 20C12.5 20 12.5 16.5 14.5 14.5C16.5 12.5 20 12.5 20 12.5C20 12.5 16.5 12.5 14.5 10.5C12.5 8.5 12.5 5 12.5 5C12.5 5 12.5 8.5 10.5 10.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
SparkleIcon.displayName = "ForwardRef(SparkleIcon)";
const SparklesIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "sparkles",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M11 3.5V5M11 5V6.5M11 5H12.5M11 5H9.5M9.5 15C9.5 15 12.2308 14.7692 13.5 13.5C14.7692 12.2308 15 9.5 15 9.5C15 9.5 15.2308 12.2308 16.5 13.5C17.7692 14.7692 20.5 15 20.5 15C20.5 15 17.7692 15.2308 16.5 16.5C15.2308 17.7692 15 20.5 15 20.5C15 20.5 14.7692 17.7692 13.5 16.5C12.2308 15.2308 9.5 15 9.5 15ZM4.5 10C4.5 10 5.72308 9.87692 6.3 9.3C6.87692 8.72308 7 7.5 7 7.5C7 7.5 7.12308 8.72308 7.7 9.3C8.27692 9.87692 9.5 10 9.5 10C9.5 10 8.27692 10.1231 7.7 10.7C7.12308 11.2769 7 12.5 7 12.5C7 12.5 6.87692 11.2769 6.3 10.7C5.72308 10.1231 4.5 10 4.5 10Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })
  });
});
SparklesIcon.displayName = "ForwardRef(SparklesIcon)";
const SpinnerIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "spinner",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
SpinnerIcon.displayName = "ForwardRef(SpinnerIcon)";
const SplitHorizontalIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "split-horizontal",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M19.5 10.5V20.5H5.5V10.5M19.5 10.5H5.5M19.5 10.5V4.5H5.5V10.5M12.5 13V15.5M12.5 18V15.5M12.5 15.5H15M12.5 15.5H10",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
SplitHorizontalIcon.displayName = "ForwardRef(SplitHorizontalIcon)";
const SplitVerticalIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "split-vertical",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M10.5 5.5V19.5M13 12.5H15.5M18 12.5H15.5M15.5 12.5V15M15.5 12.5V10M4.5 5.5H20.5V19.5H4.5V5.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
SplitVerticalIcon.displayName = "ForwardRef(SplitVerticalIcon)";
const SquareIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "square",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("rect", {
      x: 5.5,
      y: 5.5,
      width: 14,
      height: 14,
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
SquareIcon.displayName = "ForwardRef(SquareIcon)";
const StackCompactIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "stack-compact",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M5.5 15.5V18.5H19.5V15.5M5.5 15.5H19.5M5.5 15.5V9.5M19.5 15.5V9.5M5.5 9.5V6.5H19.5V9.5M5.5 9.5H19.5M5.5 12.5H19.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
StackCompactIcon.displayName = "ForwardRef(StackCompactIcon)";
const StackIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "stack",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M5.5 12.5H19.5M5.5 18.5H19.5V6.5H5.5V18.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
StackIcon.displayName = "ForwardRef(StackIcon)";
const StarFilledIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "star-filled",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M12.5 5L14.3956 9.89092L19.6329 10.1824L15.5672 13.4966L16.9084 18.5676L12.5 15.725L8.09161 18.5676L9.43284 13.4966L5.36708 10.1824L10.6044 9.89092L12.5 5Z",
      fill: "currentColor",
      stroke: "currentColor",
      strokeLinejoin: "round"
    })
  });
});
StarFilledIcon.displayName = "ForwardRef(StarFilledIcon)";
const StarIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "star",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M12.5 5L14.3956 9.89092L19.6329 10.1824L15.5672 13.4966L16.9084 18.5676L12.5 15.725L8.09161 18.5676L9.43284 13.4966L5.36708 10.1824L10.6044 9.89092L12.5 5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
StarIcon.displayName = "ForwardRef(StarIcon)";
const StopIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "stop",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("rect", {
      x: 7.5,
      y: 7.5,
      width: 10,
      height: 10,
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
StopIcon.displayName = "ForwardRef(StopIcon)";
const StrikethroughIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "strikethrough",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M12.5656 7.73438C11.0656 7.73438 10.0734 8.48438 10.0734 9.625C10.0734 10.2317 10.3649 10.6613 11.0519 11H8.90358C8.71703 10.6199 8.62813 10.1801 8.62813 9.67188C8.62813 7.75781 10.2297 6.46094 12.6125 6.46094C14.7922 6.46094 16.4172 7.75781 16.5344 9.57812H15.1203C14.925 8.42188 13.9719 7.73438 12.5656 7.73438Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      d: "M12.4875 18.2656C10.0969 18.2656 8.44844 17 8.3 15.0547H9.72188C9.89375 16.2344 11.0188 16.9844 12.6203 16.9844C14.1359 16.9844 15.2531 16.1641 15.2531 15.0469C15.2531 14.6375 15.1255 14.292 14.8589 14H16.5912C16.6638 14.266 16.6984 14.5566 16.6984 14.875C16.6984 16.9453 15.0656 18.2656 12.4875 18.2656Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      d: "M7 13.1H18V11.9H7V13.1Z",
      fill: "currentColor"
    })]
  });
});
StrikethroughIcon.displayName = "ForwardRef(StrikethroughIcon)";
const StringIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "string",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M11.6748 15.5227H13.1855L9.87842 6.36304H8.34863L5.0415 15.5227H6.50146L7.3457 13.0916H10.8369L11.6748 15.5227ZM9.04053 8.02612H9.14844L10.4751 11.8982H7.70752L9.04053 8.02612Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      d: "M16.8101 14.488C16.0674 14.488 15.5278 14.1262 15.5278 13.5042C15.5278 12.8948 15.9595 12.571 16.9116 12.5076L18.6001 12.3997V12.9773C18.6001 13.8342 17.8384 14.488 16.8101 14.488ZM16.4609 15.637C17.3687 15.637 18.124 15.2434 18.5366 14.5515H18.6445V15.5227H19.9585V10.8C19.9585 9.34009 18.981 8.47681 17.248 8.47681C15.6802 8.47681 14.563 9.23853 14.4233 10.4255H15.7437C15.896 9.93677 16.4229 9.65747 17.1846 9.65747C18.1177 9.65747 18.6001 10.0701 18.6001 10.8V11.3967L16.7275 11.5046C15.0835 11.6062 14.1567 12.3235 14.1567 13.5676C14.1567 14.8308 15.1279 15.637 16.4609 15.637Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M19.9585 18.637L5.0415 18.637V17.437L19.9585 17.437V18.637Z",
      fill: "currentColor"
    })]
  });
});
StringIcon.displayName = "ForwardRef(StringIcon)";
const SunIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "sun",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M19 12.5H22M3 12.5H6M12.5 6V3M12.5 22V19M17.3891 7.61091L19.5104 5.48959M5.48959 19.5104L7.61091 17.3891M7.61091 7.61091L5.48959 5.48959M19.5104 19.5104L17.3891 17.3891M16 12.5C16 14.433 14.433 16 12.5 16C10.567 16 9 14.433 9 12.5C9 10.567 10.567 9 12.5 9C14.433 9 16 10.567 16 12.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
SunIcon.displayName = "ForwardRef(SunIcon)";
const SyncIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "sync",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M13.5 4.5H12.5C8.08172 4.5 4.5 8.08172 4.5 12.5C4.5 15.6631 6.33576 18.3975 9 19.6958M11.5 20.5H12.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 9.33688 18.6642 6.60253 16 5.30423",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M14 17.5619L11.5 20.5L14.5 23.0619M11 7.43811L13.5 4.50001L10.5 1.93811",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
SyncIcon.displayName = "ForwardRef(SyncIcon)";
const TabletDeviceIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "tablet-device",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M5.5 5.5C5.5 4.94772 5.94772 4.5 6.5 4.5H18.5C19.0523 4.5 19.5 4.94772 19.5 5.5V19.5C19.5 20.0523 19.0523 20.5 18.5 20.5H6.5C5.94772 20.5 5.5 20.0523 5.5 19.5V5.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M13 18C13 18.2761 12.7761 18.5 12.5 18.5C12.2239 18.5 12 18.2761 12 18C12 17.7239 12.2239 17.5 12.5 17.5C12.7761 17.5 13 17.7239 13 18Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
TabletDeviceIcon.displayName = "ForwardRef(TabletDeviceIcon)";
const TagIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "tag",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M12.5 20L5 20L5 12.5L12.5 5L20 12.5L12.5 20Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M11 15.5C11 16.3284 10.3284 17 9.5 17C8.67157 17 8 16.3284 8 15.5C8 14.6716 8.67157 14 9.5 14C10.3284 14 11 14.6716 11 15.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
TagIcon.displayName = "ForwardRef(TagIcon)";
const TagsIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "tags",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M12.1562 7.93179L13.9717 6.11633L20.3553 12.5L13.9717 18.8836L10.6855 18.8836M11.0283 18.8836L17.4119 12.5L11.0283 6.11633L4.64462 12.5L4.64462 18.8836L11.0283 18.8836ZM9.75153 15.0534C9.75153 15.7585 9.17992 16.3302 8.47481 16.3302C7.76969 16.3302 7.19808 15.7585 7.19808 15.0534C7.19808 14.3483 7.76969 13.7767 8.47481 13.7767C9.17992 13.7767 9.75153 14.3483 9.75153 15.0534Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
TagsIcon.displayName = "ForwardRef(TagsIcon)";
const TargetIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "target",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M12.5 3V10M22 12.5H15M12.5 22V15M3 12.5H10M19 12.5C19 16.0899 16.0899 19 12.5 19C8.91015 19 6 16.0899 6 12.5C6 8.91015 8.91015 6 12.5 6C16.0899 6 19 8.91015 19 12.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
TargetIcon.displayName = "ForwardRef(TargetIcon)";
const TaskIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "task",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M20.5 10.75V19.75H4.5V10.75M20.5 10.75V5.75H17.5M20.5 10.75H4.5M4.5 10.75V5.75H7.5M7.5 5.75H17.5M7.5 5.75V8.25M7.5 5.75V3.25M17.5 5.75V8.25M17.5 5.75V3.25M9.7002 14.7358L11.7002 16.7358L15.3002 13.1758",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
TaskIcon.displayName = "ForwardRef(TaskIcon)";
const TerminalIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "terminal",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M8.5 9.5L11.5 12.5L8.5 15.5M13 15.5H17M5.5 6.5H19.5V18.5H5.5V6.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
TerminalIcon.displayName = "ForwardRef(TerminalIcon)";
const TextIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "text",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M7.5 9V6.5H17.5V9M12.5 18.5V6.5M10 18.5H15",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
TextIcon.displayName = "ForwardRef(TextIcon)";
const ThLargeIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "th-large",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M12.5 6.5V12.5M12.5 12.5V18.5M12.5 12.5H19.5M12.5 12.5H5.5M19.5 12.5V6.5H5.5V12.5M19.5 12.5V18.5H5.5V12.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
ThLargeIcon.displayName = "ForwardRef(ThLargeIcon)";
const ThListIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "th-list",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M9.5 6.5V10.5M9.5 10.5V14.5M9.5 10.5H19.5M9.5 10.5H5.5M9.5 14.5V18.5M9.5 14.5H19.5M9.5 14.5H5.5M5.5 6.5H19.5V18.5H5.5V6.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
ThListIcon.displayName = "ForwardRef(ThListIcon)";
const ThumbsDownIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "thumbs-down",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M9.5 15C9.5 15 12.5 16.5 12.5 18C12.5 19.5 13.5 19.5 13.5 19.5C13.5 19.5 14.5 19.5 14.5 18C14.5 16.5 14.5 15.5 14.5 15.5H18C18 15.5 18 15.5 18 15.5C18 15.5 19 15.5 19 14.5C19 13.5 19.5 14 19.5 13C19.5 12 19 11.5 19 10.5C19 9.5 18 9.5 18 8.5C18 7.5 17 7.5 16.5 7.5C16 7.5 9.5 7.5 9.5 7.5M9.5 7.5H6.5V15.5H9.5V7.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
ThumbsDownIcon.displayName = "ForwardRef(ThumbsDownIcon)";
const ThumbsUpIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "thumbs-up",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M9.5 10C9.5 10 12.5 8.5 12.5 7C12.5 5.5 13.5 5.5 13.5 5.5C13.5 5.5 14.5 5.5 14.5 7C14.5 8.5 14.5 9.5 14.5 9.5H18C18 9.5 18 9.5 18 9.5C18 9.5 19 9.5 19 10.5C19 11.5 19.5 11 19.5 12C19.5 13 19 13.5 19 14.5C19 15.5 18 15.5 18 16.5C18 17.5 17 17.5 16.5 17.5C16 17.5 9.5 17.5 9.5 17.5M9.5 17.5H6.5V9.5H9.5V17.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
ThumbsUpIcon.displayName = "ForwardRef(ThumbsUpIcon)";
const TiersIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "tiers",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M16.5 14.5L20.5 16.5L12.5 20.5L4.5 16.5L8.5 14.5M16.5 10.5L20.5 12.5L12.5 16.5L4.5 12.5L8.5 10.5M12.5 12.5L20.5 8.5L12.5 4.5L4.5 8.5L12.5 12.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
TiersIcon.displayName = "ForwardRef(TiersIcon)";
const TimelineIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "timeline",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M12.5 5V20",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */jsx("path", {
      d: "M5 8.5H11M7 12.5H11M9 16.5H11M13 16.5H20M13 12.5H18M13 8.5H16",
      stroke: "currentColor",
      strokeWidth: 1.2
    })]
  });
});
TimelineIcon.displayName = "ForwardRef(TimelineIcon)";
const ToggleArrowRightIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "toggle-arrow-right",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M10.5 16V9L16 12.5L10.5 16Z",
      fill: "currentColor",
      stroke: "currentColor",
      strokeLinejoin: "round"
    })
  });
});
ToggleArrowRightIcon.displayName = "ForwardRef(ToggleArrowRightIcon)";
const TokenIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "token",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M17.5711 12.5C17.5711 15.2614 15.3325 17.5 12.5711 17.5M7.57107 12.5C7.57107 9.73858 9.80964 7.5 12.5711 7.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
TokenIcon.displayName = "ForwardRef(TokenIcon)";
const TransferIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "transfer",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M19.5 16.5H6M5.5 8.5L19 8.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M16 13L19.5 16.5L16 20M9 12L5.5 8.5L9 5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
TransferIcon.displayName = "ForwardRef(TransferIcon)";
const TranslateIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "translate",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9.4 5.4H4V6.6H13.2189C13.1612 6.78478 13.0895 6.99578 13.0025 7.22211C12.7032 8.00031 12.2402 8.91125 11.5757 9.57574L10 11.1515L9.42426 10.5757C8.72102 9.8725 8.25297 9.16987 7.96199 8.64611C7.81668 8.38455 7.71617 8.16874 7.65305 8.02146C7.62151 7.94787 7.59937 7.89154 7.5857 7.85534C7.57886 7.83725 7.57415 7.8242 7.57144 7.81657L7.56886 7.80922C7.56886 7.80922 7.56921 7.81026 7 8C6.43079 8.18974 6.43091 8.19009 6.43091 8.19009L6.43133 8.19135L6.43206 8.19351L6.4341 8.19948L6.44052 8.21786C6.44587 8.23292 6.45336 8.25357 6.46313 8.27942C6.48266 8.33112 6.5113 8.40369 6.55008 8.49416C6.62758 8.67501 6.74582 8.92795 6.91301 9.22889C7.24703 9.83013 7.77898 10.6275 8.57574 11.4243L9.15147 12L4.57964 16.5718L4.57655 16.5749L4.57577 16.5757L5.4243 17.4242L5.42688 17.4216L10.0368 12.8117L12.6159 14.9609L13.3841 14.0391L10.8888 11.9597L12.4243 10.4243C13.2598 9.58875 13.7968 8.49969 14.1225 7.65289C14.2818 7.23863 14.395 6.87072 14.4696 6.6H16V5.4H10.6V4H9.4V5.4ZM17.4405 10L21.553 19.7672H20.2509L19.1279 17.1H14.8721L13.7491 19.7672H12.447L16.5595 10H17.4405ZM15.3773 15.9H18.6227L17 12.0462L15.3773 15.9Z",
      fill: "currentColor"
    })
  });
});
TranslateIcon.displayName = "ForwardRef(TranslateIcon)";
const TrashIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "trash",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M5 6.5H20M10 6.5V4.5C10 3.94772 10.4477 3.5 11 3.5H14C14.5523 3.5 15 3.94772 15 4.5V6.5M12.5 9V17M15.5 9L15 17M9.5 9L10 17M18.5 6.5L17.571 18.5767C17.5309 19.0977 17.0965 19.5 16.574 19.5H8.42603C7.90349 19.5 7.46905 19.0977 7.42898 18.5767L6.5 6.5H18.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
TrashIcon.displayName = "ForwardRef(TrashIcon)";
const TrendUpwardIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "trend-upward",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M4.5 18.5L11.5 10.5L13.5 14.5L20.5 6.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M20.5 11V6.5H16",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
TrendUpwardIcon.displayName = "ForwardRef(TrendUpwardIcon)";
const TriangleOutlineIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "triangle-outline",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M20.5 18.5H4.5L12.5 5.5L20.5 18.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
TriangleOutlineIcon.displayName = "ForwardRef(TriangleOutlineIcon)";
const TrolleyIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "trolley",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M8 17.5L5.81763 6.26772C5.71013 5.81757 5.30779 5.5 4.84498 5.5H3M8 17.5H17M8 17.5C8.82843 17.5 9.5 18.1716 9.5 19C9.5 19.8284 8.82843 20.5 8 20.5C7.17157 20.5 6.5 19.8284 6.5 19C6.5 18.1716 7.17157 17.5 8 17.5ZM17 17.5C17.8284 17.5 18.5 18.1716 18.5 19C18.5 19.8284 17.8284 20.5 17 20.5C16.1716 20.5 15.5 19.8284 15.5 19C15.5 18.1716 16.1716 17.5 17 17.5ZM7.78357 14.5H17.5L19 7.5H6",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
TrolleyIcon.displayName = "ForwardRef(TrolleyIcon)";
const TruncateIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "truncate",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M5 12.5H20M8.5 19.5L12.5 15.5L16.5 19.5M16.5 5.5L12.5 9.5L8.5 5.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
TruncateIcon.displayName = "ForwardRef(TruncateIcon)";
const TwitterIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "twitter",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M18.8738 6.65751C18.1994 5.9447 17.2445 5.5 16.1857 5.5C14.1423 5.5 12.4857 7.15655 12.4857 9.2C12.4857 9.55263 12.535 9.89374 12.6272 10.2168C7.0826 9.56422 4.55703 6.02857 4.55703 6.02857C4.55703 6.02857 4.02846 9.2 6.14274 11.3143C5.08571 11.3143 4.55703 10.7857 4.55703 10.7857C4.55703 10.7857 4.55703 13.4286 7.19989 14.4857C6.67143 15.0143 5.61417 14.4857 5.61417 14.4857C5.97533 15.9303 7.45606 16.8562 8.82133 17.1358C6.67298 19.1676 3.5 18.7143 3.5 18.7143C5.14562 19.771 7.21334 20.3 9.31429 20.3C16.1214 20.3 19.8162 15.6315 19.8848 9.37762C20.8722 8.58943 22 7.08571 22 7.08571C22 7.08571 21.277 7.45458 19.6913 7.98315C21.277 6.92601 21.4714 5.5 21.4714 5.5C21.4714 5.5 20.4135 6.55789 18.8738 6.65751Z",
      fill: "currentColor"
    })
  });
});
TwitterIcon.displayName = "ForwardRef(TwitterIcon)";
const UlistIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "ulist",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M7.10153 17.5C7.10153 17.8322 6.83221 18.1016 6.5 18.1016C6.16778 18.1016 5.89847 17.8322 5.89847 17.5C5.89847 17.1678 6.16778 16.8985 6.5 16.8985C6.83221 16.8985 7.10153 17.1678 7.10153 17.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M7.10153 7.49997C7.10153 7.83218 6.83221 8.1015 6.5 8.1015C6.16778 8.1015 5.89847 7.83218 5.89847 7.49997C5.89847 7.16775 6.16778 6.89844 6.5 6.89844C6.83221 6.89844 7.10153 7.16775 7.10153 7.49997Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M7.10153 12.5C7.10153 12.8322 6.83221 13.1015 6.5 13.1015C6.16778 13.1015 5.89847 12.8322 5.89847 12.5C5.89847 12.1678 6.16778 11.8984 6.5 11.8984C6.83221 11.8984 7.10153 12.1678 7.10153 12.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M10 7.5H19M10 17.5H19M10 12.5H19",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
UlistIcon.displayName = "ForwardRef(UlistIcon)";
const UnarchiveIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "unarchive",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M12.5 10.5V18M20.5 7.5V20.5H4.5V7.5L7.5 4.5H17.5L20.5 7.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M4.5 7.5H20.5M16 14L12.5 10.5L9 14",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
UnarchiveIcon.displayName = "ForwardRef(UnarchiveIcon)";
const UnderlineIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "underline",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M9.52791 7.11407H8.17V14.2582C8.17 16.5817 9.79195 18.2565 12.4927 18.2565C15.1934 18.2565 16.8154 16.5817 16.8154 14.2582V7.11407H15.4574V14.1677C15.4574 15.8122 14.3787 17.0042 12.4927 17.0042C10.6067 17.0042 9.52791 15.8122 9.52791 14.1677V7.11407Z",
      fill: "currentColor"
    }), /* @__PURE__ */jsx("path", {
      d: "M7 20.5H18",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
UnderlineIcon.displayName = "ForwardRef(UnderlineIcon)";
const UndoIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "undo",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M6 9.5L15 9.5C17.4853 9.5 19.5 11.5147 19.5 14C19.5 16.4853 17.4853 18.5 15 18.5H6",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M10 13.5L6 9.5L10 5.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
UndoIcon.displayName = "ForwardRef(UndoIcon)";
const UnknownIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "unknown",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M12.5 13C12.5 11 14 11.5 14 10C14 9.34375 13.5 8.5 12.5 8.5C11.5 8.5 11 9 10.5 9.5M12.5 16V14.5M5.5 5.5H19.5V19.5H5.5V5.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
UnknownIcon.displayName = "ForwardRef(UnknownIcon)";
const UnlinkIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "unlink",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M15 13.5L17.5 11C18.281 10.219 18.281 8.78105 17.5 8L17 7.5C16.2189 6.71895 14.781 6.71895 14 7.5L11.5 10M10 11.5L7.5 14C6.71896 14.781 6.71895 16.219 7.5 17L8 17.5C8.78105 18.281 10.2189 18.281 11 17.5L13.5 15M9.5 8V5M8 9.5H5M17 15.5H20M15.5 17V20",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
UnlinkIcon.displayName = "ForwardRef(UnlinkIcon)";
const UnlockIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "unlock",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M9.5 11.5V8.5C9.5 6.5 8 5.5 6.5 5.5C5 5.5 3.5 6.5 3.5 8.5V11.5M7.5 11.5H17.5V19.5H7.5V11.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
UnlockIcon.displayName = "ForwardRef(UnlockIcon)";
const UnpublishIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "unpublish",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M5 19.5H20M12.5 16V5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M17.5 11L12.5 16L7.5 11",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
UnpublishIcon.displayName = "ForwardRef(UnpublishIcon)";
const UploadIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "upload",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M12.5 6V15.5M5.5 15.5H19.5V19.5H5.5V15.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M7.5 11L12.5 6L17.5 11",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
UploadIcon.displayName = "ForwardRef(UploadIcon)";
const UserIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "user",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M8 14.5C7 15 5.5 16 5.5 19.5H19.5C19.5 16 18.3416 15.1708 17 14.5C16 14 14 14 14 12.5C14 11 15 10.25 15 8.25C15 6.25 14 5.25 12.5 5.25C11 5.25 10 6.25 10 8.25C10 10.25 11 11 11 12.5C11 14 9 14 8 14.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
UserIcon.displayName = "ForwardRef(UserIcon)";
const UsersIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "users",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M17.5 18.5H21.5C21.5 15 20.8416 14.1708 19.5 13.5C18.5 13 16.5 12.5 16.5 11C16.5 9.5 17.5 9 17.5 7C17.5 5 16.5 4 15 4C13.6628 4 12.723 4.79472 12.5347 6.38415M4.5 20.5C4.5 17 5.5 16 6.5 15.5C7.5 15 9.5 14.5 9.5 13C9.5 11.5 8.5 11 8.5 9C8.5 7 9.5 6 11 6C12.5 6 13.5 7 13.5 9C13.5 11 12.5 11.5 12.5 13C12.5 14.5 14.5 15 15.5 15.5C16.8416 16.1708 17.5 17 17.5 20.5H4.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
UsersIcon.displayName = "ForwardRef(UsersIcon)";
const VersionsIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "versions",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M10.5 7.5H7.5V17.5H10.5M7.5 9.5H4.5V15.5H7.5",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M20.5 19.5V5.5H10.5V19.5H20.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
VersionsIcon.displayName = "ForwardRef(VersionsIcon)";
const VideoIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsxs("svg", {
    "data-sanity-icon": "video",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: [/* @__PURE__ */jsx("path", {
      d: "M19.5 18.5H5.5V6.5H19.5V18.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    }), /* @__PURE__ */jsx("path", {
      d: "M11.5 14.5V10.5L14.5 12.5L11.5 14.5Z",
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })]
  });
});
VideoIcon.displayName = "ForwardRef(VideoIcon)";
const WarningFilledIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "warning-filled",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14.741 5.12635C13.7357 3.41736 11.2643 3.41736 10.259 5.12635L3.7558 16.1817C2.73624 17.915 3.98595 20.1 5.99683 20.1H19.0032C21.014 20.1 22.2637 17.915 21.2442 16.1817L14.741 5.12635ZM11.9 8.99998V13H13.1V8.99998H11.9ZM13.1 16V14.5H11.9V16H13.1Z",
      fill: "currentColor"
    })
  });
});
WarningFilledIcon.displayName = "ForwardRef(WarningFilledIcon)";
const WarningOutlineIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "warning-outline",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M12.5 9V13M12.5 16V14.5M14.2239 5.43058L20.727 16.486C21.5113 17.8192 20.55 19.5 19.0032 19.5H5.99683C4.45 19.5 3.48869 17.8192 4.27297 16.486L10.7761 5.43058C11.5494 4.11596 13.4506 4.11596 14.2239 5.43058Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinejoin: "round"
    })
  });
});
WarningOutlineIcon.displayName = "ForwardRef(WarningOutlineIcon)";
const WrenchIcon = forwardRef(function (props, ref) {
  return /* @__PURE__ */jsx("svg", {
    "data-sanity-icon": "wrench",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    ...props,
    children: /* @__PURE__ */jsx("path", {
      d: "M17.0407 5.14624L17.4649 5.57051C17.6166 5.41887 17.6758 5.19783 17.6202 4.99071C17.5646 4.78359 17.4027 4.62189 17.1955 4.56656L17.0407 5.14624ZM14.4013 7.7856L13.9771 7.36134C13.8288 7.50959 13.7687 7.72447 13.8185 7.92813L14.4013 7.7856ZM12.8778 6.26211L12.4535 5.83784L12.8778 6.26211ZM11.8309 10.6568L12.2552 11.0811C12.4152 10.9211 12.4716 10.6847 12.401 10.4697L11.8309 10.6568ZM5.63925 16.8485L5.21498 16.4242H5.21498L5.63925 16.8485ZM5.63925 19.935L6.06351 19.5108H6.06351L5.63925 19.935ZM8.72581 19.935L9.15007 20.3593L8.72581 19.935ZM15.1184 13.5425L15.2301 12.953C15.0351 12.916 14.8344 12.9779 14.6941 13.1182L15.1184 13.5425ZM18.9718 12.3561L18.5475 11.9318L18.9718 12.3561ZM20.0877 8.19324L20.6674 8.03843C20.612 7.83124 20.4503 7.66934 20.2432 7.61375C20.0361 7.55816 19.815 7.61734 19.6634 7.76898L20.0877 8.19324ZM17.4483 10.8326L17.3058 11.4154C17.5094 11.4652 17.7243 11.4051 17.8726 11.2569L17.4483 10.8326ZM15 10.2339L14.4172 10.3764C14.4704 10.5938 14.6401 10.7635 14.8575 10.8167L15 10.2339ZM16.6164 4.72198L13.9771 7.36134L14.8256 8.20986L17.4649 5.57051L16.6164 4.72198ZM13.3021 6.68637C14.2723 5.71612 15.6467 5.39501 16.8859 5.72593L17.1955 4.56656C15.5595 4.12966 13.7389 4.55245 12.4535 5.83784L13.3021 6.68637ZM12.401 10.4697C11.9779 9.18109 12.2794 7.70907 13.3021 6.68637L12.4535 5.83784C11.0986 7.19284 10.7021 9.14217 11.2608 10.844L12.401 10.4697ZM11.4066 10.2326L5.21498 16.4242L6.06351 17.2727L12.2552 11.0811L11.4066 10.2326ZM5.21498 16.4242C4.12834 17.5109 4.12834 19.2727 5.21498 20.3593L6.06351 19.5108C5.4455 18.8928 5.4455 17.8908 6.06351 17.2727L5.21498 16.4242ZM5.21498 20.3593C6.30163 21.446 8.06343 21.446 9.15007 20.3593L8.30155 19.5108C7.68353 20.1288 6.68153 20.1288 6.06351 19.5108L5.21498 20.3593ZM9.15007 20.3593L15.5426 13.9668L14.6941 13.1182L8.30155 19.5108L9.15007 20.3593ZM18.5475 11.9318C17.6463 12.8331 16.3968 13.1742 15.2301 12.953L15.0066 14.132C16.5466 14.4239 18.2023 13.9741 19.3961 12.7804L18.5475 11.9318ZM19.508 8.34804C19.8389 9.58721 19.5178 10.9616 18.5475 11.9318L19.3961 12.7804C20.6815 11.495 21.1043 9.67445 20.6674 8.03843L19.508 8.34804ZM17.8726 11.2569L20.5119 8.6175L19.6634 7.76898L17.024 10.4083L17.8726 11.2569ZM14.8575 10.8167L17.3058 11.4154L17.5908 10.2498L15.1426 9.65106L14.8575 10.8167ZM13.8185 7.92813L14.4172 10.3764L15.5829 10.0914L14.9841 7.64307L13.8185 7.92813Z",
      fill: "currentColor"
    })
  });
});
WrenchIcon.displayName = "ForwardRef(WrenchIcon)";
const icons = {
    "access-denied": AccessDeniedIcon,
    activity: ActivityIcon,
    "add-circle": AddCircleIcon,
    "add-comment": AddCommentIcon,
    "add-document": AddDocumentIcon,
    add: AddIcon,
    "add-user": AddUserIcon,
    api: ApiIcon,
    archive: ArchiveIcon,
    "arrow-down": ArrowDownIcon,
    "arrow-left": ArrowLeftIcon,
    "arrow-right": ArrowRightIcon,
    "arrow-top-right": ArrowTopRightIcon,
    "arrow-up": ArrowUpIcon,
    asterisk: AsteriskIcon,
    "bar-chart": BarChartIcon,
    basket: BasketIcon,
    bell: BellIcon,
    bill: BillIcon,
    "binary-document": BinaryDocumentIcon,
    "block-content": BlockContentIcon,
    "block-element": BlockElementIcon,
    blockquote: BlockquoteIcon,
    bold: BoldIcon,
    bolt: BoltIcon,
    book: BookIcon,
    "bookmark-filled": BookmarkFilledIcon,
    bookmark: BookmarkIcon,
    bottle: BottleIcon,
    bug: BugIcon,
    "bulb-filled": BulbFilledIcon,
    "bulb-outline": BulbOutlineIcon,
    calendar: CalendarIcon,
    case: CaseIcon,
    "chart-upward": ChartUpwardIcon,
    "checkmark-circle": CheckmarkCircleIcon,
    checkmark: CheckmarkIcon,
    "chevron-down": ChevronDownIcon,
    "chevron-left": ChevronLeftIcon,
    "chevron-right": ChevronRightIcon,
    "chevron-up": ChevronUpIcon,
    circle: CircleIcon,
    clipboard: ClipboardIcon,
    "clipboard-image": ClipboardImageIcon,
    clock: ClockIcon,
    "close-circle": CloseCircleIcon,
    close: CloseIcon,
    "code-block": CodeBlockIcon,
    code: CodeIcon,
    cog: CogIcon,
    collapse: CollapseIcon,
    "color-wheel": ColorWheelIcon,
    comment: CommentIcon,
    component: ComponentIcon,
    compose: ComposeIcon,
    "compose-sparkles": ComposeSparklesIcon,
    confetti: ConfettiIcon,
    controls: ControlsIcon,
    copy: CopyIcon,
    "credit-card": CreditCardIcon,
    crop: CropIcon,
    cube: CubeIcon,
    dashboard: DashboardIcon,
    database: DatabaseIcon,
    desktop: DesktopIcon,
    diamond: DiamondIcon,
    document: DocumentIcon,
    "document-pdf": DocumentPdfIcon,
    "document-remove": DocumentRemoveIcon,
    "document-sheet": DocumentSheetIcon,
    "document-text": DocumentTextIcon,
    "document-video": DocumentVideoIcon,
    "document-word": DocumentWordIcon,
    "document-zip": DocumentZipIcon,
    documents: DocumentsIcon,
    dot: DotIcon,
    "double-chevron-down": DoubleChevronDownIcon,
    "double-chevron-left": DoubleChevronLeftIcon,
    "double-chevron-right": DoubleChevronRightIcon,
    "double-chevron-up": DoubleChevronUpIcon,
    download: DownloadIcon,
    "drag-handle": DragHandleIcon,
    drop: DropIcon,
    "earth-americas": EarthAmericasIcon,
    "earth-globe": EarthGlobeIcon,
    edit: EditIcon,
    "ellipsis-horizontal": EllipsisHorizontalIcon,
    "ellipsis-vertical": EllipsisVerticalIcon,
    empty: EmptyIcon,
    enter: EnterIcon,
    "enter-right": EnterRightIcon,
    envelope: EnvelopeIcon,
    equal: EqualIcon,
    "error-filled": ErrorFilledIcon,
    "error-outline": ErrorOutlineIcon,
    "error-screen": ErrorScreenIcon,
    expand: ExpandIcon,
    "eye-closed": EyeClosedIcon,
    "eye-open": EyeOpenIcon,
    "face-happy": FaceHappyIcon,
    "face-indifferent": FaceIndifferentIcon,
    "face-sad": FaceSadIcon,
    feedback: FeedbackIcon,
    filter: FilterIcon,
    folder: FolderIcon,
    generate: GenerateIcon,
    github: GithubIcon,
    groq: GroqIcon,
    hash: HashIcon,
    "heart-filled": HeartFilledIcon,
    heart: HeartIcon,
    "help-circle": HelpCircleIcon,
    highlight: HighlightIcon,
    home: HomeIcon,
    "ice-cream": IceCreamIcon,
    image: ImageIcon,
    "image-remove": ImageRemoveIcon,
    images: ImagesIcon,
    inbox: InboxIcon,
    "info-filled": InfoFilledIcon,
    "info-outline": InfoOutlineIcon,
    "inline-element": InlineElementIcon,
    inline: InlineIcon,
    "insert-above": InsertAboveIcon,
    "insert-below": InsertBelowIcon,
    italic: ItalicIcon,
    joystick: JoystickIcon,
    json: JsonIcon,
    launch: LaunchIcon,
    leave: LeaveIcon,
    lemon: LemonIcon,
    link: LinkIcon,
    "link-removed": LinkRemovedIcon,
    linkedin: LinkedinIcon,
    list: ListIcon,
    lock: LockIcon,
    "logo-js": LogoJsIcon,
    "logo-ts": LogoTsIcon,
    marker: MarkerIcon,
    "marker-removed": MarkerRemovedIcon,
    "master-detail": MasterDetailIcon,
    menu: MenuIcon,
    microphone: MicrophoneIcon,
    "microphone-slash": MicrophoneSlashIcon,
    "mobile-device": MobileDeviceIcon,
    moon: MoonIcon,
    number: NumberIcon,
    "ok-hand": OkHandIcon,
    olist: OlistIcon,
    overage: OverageIcon,
    package: PackageIcon,
    "panel-left": PanelLeftIcon,
    "panel-right": PanelRightIcon,
    pause: PauseIcon,
    "pin-filled": PinFilledIcon,
    pin: PinIcon,
    "pin-removed": PinRemovedIcon,
    play: PlayIcon,
    plug: PlugIcon,
    presentation: PresentationIcon,
    "progress-50": Progress50Icon,
    "progress-75": Progress75Icon,
    projects: ProjectsIcon,
    publish: PublishIcon,
    "read-only": ReadOnlyIcon,
    redo: RedoIcon,
    refresh: RefreshIcon,
    "remove-circle": RemoveCircleIcon,
    remove: RemoveIcon,
    reset: ResetIcon,
    restore: RestoreIcon,
    retrieve: RetrieveIcon,
    retry: RetryIcon,
    revert: RevertIcon,
    robot: RobotIcon,
    rocket: RocketIcon,
    schema: SchemaIcon,
    search: SearchIcon,
    select: SelectIcon,
    share: ShareIcon,
    sort: SortIcon,
    sparkle: SparkleIcon,
    sparkles: SparklesIcon,
    spinner: SpinnerIcon,
    "split-horizontal": SplitHorizontalIcon,
    "split-vertical": SplitVerticalIcon,
    square: SquareIcon,
    "stack-compact": StackCompactIcon,
    stack: StackIcon,
    "star-filled": StarFilledIcon,
    star: StarIcon,
    stop: StopIcon,
    strikethrough: StrikethroughIcon,
    string: StringIcon,
    sun: SunIcon,
    sync: SyncIcon,
    "tablet-device": TabletDeviceIcon,
    tag: TagIcon,
    tags: TagsIcon,
    target: TargetIcon,
    task: TaskIcon,
    terminal: TerminalIcon,
    text: TextIcon,
    "th-large": ThLargeIcon,
    "th-list": ThListIcon,
    "thumbs-down": ThumbsDownIcon,
    "thumbs-up": ThumbsUpIcon,
    tiers: TiersIcon,
    timeline: TimelineIcon,
    "toggle-arrow-right": ToggleArrowRightIcon,
    token: TokenIcon,
    transfer: TransferIcon,
    translate: TranslateIcon,
    trash: TrashIcon,
    "trend-upward": TrendUpwardIcon,
    "triangle-outline": TriangleOutlineIcon,
    trolley: TrolleyIcon,
    truncate: TruncateIcon,
    twitter: TwitterIcon,
    ulist: UlistIcon,
    unarchive: UnarchiveIcon,
    underline: UnderlineIcon,
    undo: UndoIcon,
    unknown: UnknownIcon,
    unlink: UnlinkIcon,
    unlock: UnlockIcon,
    unpublish: UnpublishIcon,
    upload: UploadIcon,
    user: UserIcon,
    users: UsersIcon,
    versions: VersionsIcon,
    video: VideoIcon,
    "warning-filled": WarningFilledIcon,
    "warning-outline": WarningOutlineIcon,
    wrench: WrenchIcon
  },
  Icon = forwardRef(function (props, ref) {
    const {
        symbol,
        ...restProps
      } = props,
      IconComponent = icons[symbol];
    return IconComponent ? /* @__PURE__ */jsx(IconComponent, {
      ...restProps,
      ref
    }) : null;
  });
Icon.displayName = "ForwardRef(Icon)";
const convertFormat$1 = (name, options, reactName) => {
  if (options.outputFormat === "react") return reactName || name;
  return name;
};
const configuration$1 = {
  title: "Sanity Icons",
  provider: "sa",
  icons: function () {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return Object.entries(icons).map(icon => {
      const name = icon[0];
      const reactName = icon[1].render.name.replace(/2$/, "");
      return {
        name: convertFormat$1(name, options, reactName),
        component: () => icon[1].render({
          width: ICON_WIDTH,
          height: ICON_HEIGHT
        }),
        tags: createTags(name, convertFormat$1)
      };
    });
  }
};
const convertFormat = function (name) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (options.outputFormat === "react") return name;
  const separator = "-";
  const prefix = name.replace(/^(SiReg|Si)(.*$)/, "$2");
  return decamelize(prefix, separator);
};
const configuration = {
  title: "Simple Icons",
  provider: "si",
  icons: function () {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return Object.keys(Si).map(name => {
      const Icon = Si[name];
      return {
        name: convertFormat(name, options),
        component: () => /* @__PURE__ */jsx(Icon, {}),
        tags: createTags(name, convertFormat)
      };
    });
  }
};
const providers = [configuration$7, configuration$6, configuration$5, configuration$4, configuration$3, configuration$2, configuration$1, configuration];
function getProviders() {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return [...getSupportedProviders(options)];
}
function getSupportedProviders(options) {
  const supportedProviders = providers.map(config => config.provider);
  const customProviders = (options.configurations || []).map(config => config.provider);
  let providers$1 = [];
  if (options.providers) {
    providers$1 = [...options.providers].filter(p => supportedProviders.includes(p));
  }
  if (options.configurations) {
    providers$1 = [...providers$1, ...customProviders];
  }
  if (!providers$1.length) return supportedProviders;
  return providers$1;
}
function configurationFromProvider(provider, options) {
  const configurations = [...providers, ...(options.configurations || [])];
  return configurations.find(config => config.provider === provider);
}
const configurationTitleFromProvider = (provider, options) => {
  if (provider === ALL_CONFIGURATIONS_PROVIDER) return ALL_CONFIGURATIONS_TITLE;
  return configurationFromProvider(provider, options).title;
};
function listToMatrix(list, elementsPerSubArray) {
  const matrix = [];
  for (let i = 0, k = -1; i < list.length; i++) {
    if (i % elementsPerSubArray === 0) {
      k++;
      matrix[k] = [];
    }
    matrix[k].push(list[i]);
  }
  return matrix;
}
function getFiltered(icons, options) {
  const filter = options.filter || [];
  if (!filter.length) return icons;
  const filtered = icons.filter(_ref2 => {
    let {
      tags
    } = _ref2;
    return filter.some(function () {
      let f = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      return tags.some(t => {
        if (typeof f === "object") return f.test(t);
        return f.toLowerCase() === t.toLowerCase();
      });
    });
  });
  return filtered;
}
function getIcons() {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const supportedProviders = getSupportedProviders(options);
  let icons = [];
  const addIconProvider = provider => icon => {
    return {
      ...icon,
      provider
    };
  };
  if (supportedProviders) {
    providers.filter(config => supportedProviders.includes(config.provider)).forEach(config => {
      icons = [...icons, ...config.icons(options).map(addIconProvider(config.provider))];
    });
  }
  if (options.configurations) {
    options.configurations.forEach(config => {
      icons = [...icons, ...config.icons(options).map(addIconProvider(config.provider))];
    });
  }
  if (!icons.length) {
    providers.forEach(config => {
      icons = [...icons, ...config.icons(options).map(addIconProvider(config.provider))];
    });
  }
  return getFiltered(icons, options);
}
function useDebouncedCallback(callback, delay) {
  const [timeoutId, setTimeoutId] = useState(null);
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const id = window.setTimeout(() => callback(...args), delay);
    setTimeoutId(id);
  };
}
const useQuery = options => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const icons = useMemo(() => getIcons(options), [options]);
  const debouncedFetchIcons = useDebouncedCallback(() => {
    const queryResults = icons.filter(_ref3 => {
      let {
        name
      } = _ref3;
      return name.toLowerCase().includes(query.toLowerCase());
    });
    setResults(queryResults);
    setLoading(false);
  }, LOADING_TIMER_MS);
  useEffect(() => {
    if (!loading) {
      setLoading(true);
    }
    debouncedFetchIcons();
  }, [query]);
  return {
    query,
    loading,
    results,
    setQuery
  };
};
function getIconByValue(name, icons) {
  const found = icons.find(icon => icon.name === name);
  return found || null;
}
const useSelectedIcon = (iconName, results) => {
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    setSelected(getIconByValue(iconName, results));
  }, [results]);
  return {
    selected,
    setSelected
  };
};
var Action = /* @__PURE__ */(Action2 => {
  Action2["add"] = "add";
  Action2["edit"] = "edit";
  Action2["delete"] = "delete";
  return Action2;
})(Action || {});
const Menu = _ref4 => {
  let {
    onClick,
    selected,
    readOnly
  } = _ref4;
  return /* @__PURE__ */jsxs(Fragment, {
    children: [!selected && /* @__PURE__ */jsx(Button, {
      disabled: readOnly,
      icon: AddIcon,
      fontSize: [1, 1, 2],
      mode: "ghost",
      padding: [2, 2, 3],
      tone: "default",
      text: "Add icon",
      onClick: () => onClick("add" /* add */)
    }), selected && /* @__PURE__ */jsx(MenuButton, {
      button: /* @__PURE__ */jsx(Button, {
        disabled: readOnly,
        mode: "ghost",
        padding: [2, 2, 3],
        tone: "default",
        text: /* @__PURE__ */jsx(selected.component, {})
      }),
      id: "menu-button-example",
      menu: /* @__PURE__ */jsxs(Menu$1, {
        children: [/* @__PURE__ */jsx(MenuItem, {
          text: "Edit",
          onClick: () => onClick("edit" /* edit */)
        }), /* @__PURE__ */jsx(MenuItem, {
          text: "Delete",
          onClick: () => onClick("delete" /* delete */)
        })]
      }),
      popover: {
        placement: "bottom"
      }
    })]
  });
};
const Popup = _ref5 => {
  let {
    onClose,
    children,
    isOpen
  } = _ref5;
  if (!isOpen) return null;
  return /* @__PURE__ */jsx(Dialog, {
    header: "Icon Picker",
    id: "icon-popup",
    onClose,
    zOffset: 1e3,
    width: 1,
    children: /* @__PURE__ */jsx(Box, {
      padding: 4,
      children
    })
  });
};
const SearchBar = _ref6 => {
  let {
    value,
    onChange
  } = _ref6;
  return /* @__PURE__ */jsx(TextInput, {
    fontSize: 2,
    padding: 4,
    value,
    placeholder: "Search Icons",
    onChange
  });
};
function useMedia(queries, values, defaultValue) {
  const mediaQueryLists = queries.map(q => window.matchMedia(q));
  const getValue = () => {
    const index = mediaQueryLists.findIndex(mql => mql.matches);
    return typeof values[index] === "undefined" ? defaultValue : values[index];
  };
  const [value, setValue] = useState(getValue);
  useEffect(() => {
    const handler = () => setValue(getValue);
    mediaQueryLists.forEach(mql => mql.addListener(handler));
    return () => mediaQueryLists.forEach(mql => mql.removeListener(handler));
  }, []);
  return value;
}
const Wrapper = styled.section`
  min-height: 200px;
  width: 100%;
  position: relative;
`;
const SearchResults = _ref7 => {
  let {
    results,
    selected,
    onSelect,
    filter,
    loading,
    query
  } = _ref7;
  const [filtered, setFiltered] = useState([]);
  const COLUMNS_COUNT = useMedia(
  // Media queries
  ["(min-width: 960px)", "(min-width: 640px)", "(min-width: 512px)"],
  // Column counts (relates to above media queries by array index)
  [6, 4, 2],
  // Default column count
  1);
  useEffect(() => {
    updateIcons(COLUMNS_COUNT);
  }, [results]);
  const getFiltered = items => {
    if (!filter || filter === ALL_CONFIGURATIONS_PROVIDER) return items;
    return items.filter(item => item.provider === filter);
  };
  function updateIcons(cols) {
    const icons = getFiltered(results);
    const mappedIcons = listToMatrix(Object.values(icons), cols);
    setFiltered(mappedIcons);
  }
  const createIconButton = icon => {
    const buttonRef = useRef(null);
    return /* @__PURE__ */jsx(Button, {
      ref: buttonRef,
      mode: "ghost",
      onClick: () => onSelect(icon, buttonRef.current),
      text: /* @__PURE__ */jsx(icon.component, {}),
      style: {
        marginTop: "5px"
      },
      selected: !!selected && selected.provider === icon.provider && icon.name === selected.name
    }, icon.provider.concat(icon.name));
  };
  const Row = _ref8 => {
    let {
      index,
      style
    } = _ref8;
    return /* @__PURE__ */jsx(Grid, {
      style,
      columns: [1, 2, 4, 6],
      gap: [1, 1, 1, 1],
      children: filtered[index].map(createIconButton)
    }, index.toString());
  };
  const onResize = () => {
    updateIcons(COLUMNS_COUNT);
  };
  return /* @__PURE__ */jsxs(Wrapper, {
    children: [loading && /* @__PURE__ */jsx(Flex, {
      align: "center",
      justify: "center",
      style: {
        width: "100%",
        height: "100%",
        position: "absolute"
      },
      children: /* @__PURE__ */jsx(Spinner, {
        size: 4,
        muted: true
      })
    }), !loading && !!filtered.length && /* @__PURE__ */jsx(AutoSizer, {
      onResize,
      children: _ref9 => {
        let {
          height,
          width
        } = _ref9;
        return /* @__PURE__ */jsx(FixedSizeList, {
          height,
          itemCount: filtered.length,
          itemSize: 45,
          width,
          children: Row
        });
      }
    }), !loading && !filtered.length && /* @__PURE__ */jsx(Flex, {
      align: "center",
      justify: "center",
      style: {
        width: "100%",
        height: "100%",
        position: "absolute"
      },
      children: /* @__PURE__ */jsx(Text, {
        children: `No results found for "${query}"`
      })
    })]
  });
};
const TabsContext = createContext(void 0);
const TabsProvider = _ref10 => {
  let {
    children
  } = _ref10;
  const [selectedTabId, setSelectedTabId] = useState(ALL_CONFIGURATIONS_PROVIDER);
  return /* @__PURE__ */jsx(TabsContext.Provider, {
    value: {
      selectedTabId,
      setSelectedTabId
    },
    children
  });
};
const useTabs = () => {
  const context = useContext(TabsContext);
  if (context === void 0) {
    throw new Error("useTabs must be used within a TabsProvider");
  }
  return context;
};
const Tab = _ref11 => {
  let {
    provider
  } = _ref11;
  const options = useOptions();
  const {
    selectedTabId,
    setSelectedTabId
  } = useTabs();
  const handleClick = id => setSelectedTabId(id);
  const title = configurationTitleFromProvider(provider, options);
  return /* @__PURE__ */jsx(Tab$1, {
    "aria-controls": `${provider}-panel`,
    id: `${provider}-tab`,
    label: `${title}`,
    onClick: () => handleClick(provider),
    selected: selectedTabId === provider
  });
};
const TabList = _ref12 => {
  let {
    providers
  } = _ref12;
  return /* @__PURE__ */jsx(TabList$1, {
    space: 1,
    children: [...providers].map(provider => /* @__PURE__ */jsx(Tab, {
      provider
    }, provider))
  });
};
const TabPanel = _ref13 => {
  let {
    provider,
    children
  } = _ref13;
  const options = useOptions();
  const {
    selectedTabId
  } = useTabs();
  const title = configurationTitleFromProvider(provider, options);
  return /* @__PURE__ */jsx(TabPanel$1, {
    "aria-labelledby": `${provider}-tab`,
    hidden: selectedTabId !== provider,
    id: `${provider}-panel`,
    children: /* @__PURE__ */jsxs(Card, {
      marginTop: 2,
      padding: 4,
      radius: 2,
      children: [/* @__PURE__ */jsx(Heading, {
        children: title
      }), /* @__PURE__ */jsx(Box, {
        marginTop: 4,
        children
      })]
    })
  }, provider);
};
const Tabs = _ref14 => {
  let {
    children
  } = _ref14;
  return /* @__PURE__ */jsx(TabsProvider, {
    children: /* @__PURE__ */jsx(Container, {
      children: /* @__PURE__ */jsx(Box, {
        marginTop: 4,
        children
      })
    })
  });
};
const IconPicker = _ref15 => {
  let {
    schemaType,
    value = {},
    readOnly,
    onChange
  } = _ref15;
  const options = schemaType.options;
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const {
    query,
    loading,
    results,
    setQuery
  } = useQuery(options);
  const {
    selected,
    setSelected
  } = useSelectedIcon(value.name, results);
  const unsetIcon = () => {
    onChange(unset());
    setSelected(null);
  };
  const setIcon = (icon, ele) => {
    if (selected && icon.name === selected.name) return unsetIcon();
    const getSvgString = () => ele.getElementsByTagName("svg")[0].outerHTML;
    onChange([setIfMissing({
      _type: schemaType.name
    }), set(icon.name, ["name"]), set(icon.provider, ["provider"]), schemaType.options.storeSvg ? set(getSvgString(), ["svg"]) : unset(["svg"])]);
    return setSelected(icon);
  };
  const openPopup = () => {
    setIsPopupOpen(true);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
    setQuery("");
  };
  const onQueryChange = e => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
  };
  const handleMenuClick = action => {
    if (action === Action.add) return setIsPopupOpen(true);
    if (action === Action.edit) return openPopup();
    if (action === Action.delete) return unsetIcon();
    return new Error("Unsupported action");
  };
  const providers = getProviders(options);
  const tabProviders = [ALL_CONFIGURATIONS_PROVIDER, ...providers];
  const hideTabs = providers.length === 1;
  const searchResultsProps = {
    onSelect: setIcon,
    results,
    selected,
    loading,
    query
  };
  return /* @__PURE__ */jsx(Card, {
    children: /* @__PURE__ */jsx(OptionsProvider, {
      options,
      children: /* @__PURE__ */jsxs(IconContext.Provider, {
        value: {
          style: {
            width: ICON_WIDTH,
            height: ICON_HEIGHT
          }
        },
        children: [/* @__PURE__ */jsx(Menu, {
          onClick: handleMenuClick,
          selected,
          readOnly
        }), /* @__PURE__ */jsxs(Popup, {
          onClose: closePopup,
          isOpen: isPopupOpen,
          children: [/* @__PURE__ */jsx(SearchBar, {
            value: query,
            onChange: onQueryChange
          }), hideTabs ? /* @__PURE__ */jsx(SearchResults, {
            ...searchResultsProps
          }) : /* @__PURE__ */jsxs(Tabs, {
            children: [/* @__PURE__ */jsx(TabList, {
              providers: tabProviders
            }), /* @__PURE__ */jsx(Fragment, {
              children: tabProviders.map(provider => /* @__PURE__ */jsx(TabPanel, {
                provider,
                children: /* @__PURE__ */jsx(SearchResults, {
                  ...searchResultsProps,
                  filter: provider
                })
              }, provider))
            })]
          })]
        })]
      })
    })
  });
};
const preview = _ref16 => {
  let {
    provider,
    name,
    options = {}
  } = _ref16;
  const customConfigurations = options.configurations || [];
  if (!provider) return null;
  const icons = [...providers, ...customConfigurations].find(config => config.provider === provider)?.icons();
  const found = icons?.find(icon => icon.tags.some(tag => tag === name));
  return found?.component() || null;
};
const migrateIconName = (name, provider, format) => {
  const found = getIcons({
    outputFormat: format
  }).find(icon => icon.provider === provider && icon.tags.includes(name));
  if (!name) {
    throw new Error(`Must specify a name! Got ${name}`);
  }
  if (!found) {
    throw new Error(`Icon with name ${name} for provider ${provider} not found!`);
  }
  const [reactName, defaultName] = found.tags;
  return format === "react" ? reactName : defaultName;
};
const iconPicker = definePlugin(() => {
  return {
    name: "sanity-plugin-icon-picker",
    schema: {
      types: [{
        title: "Icon Picker",
        name: "iconPicker",
        type: "object",
        components: {
          input: IconPicker
        },
        fields: [defineField({
          title: "Provider",
          name: "provider",
          type: "string"
        }), defineField({
          title: "Name",
          name: "name",
          type: "string"
        }), defineField({
          title: "Inline SVG",
          name: "svg",
          type: "string"
        })]
      }]
    }
  };
});
export { iconPicker, migrateIconName, preview };
//# sourceMappingURL=index.esm.js.map
