import { css } from "@emotion/react";
import { theme } from "./uc-theme-provider";
import SvgIconArrowRight from "../icons/icon-arrow-right.svg";
import SvgIconCheckboxChecked from "../icons/icon-checkbox-checked.svg";
import SvgIconCheckboxUnChecked from "../icons/icon-checkbox-unchecked.svg";

const treePrefixCls = "rc-tree";
const treeNodePrefixCls = "rc-tree-treenode";

const treeCss = css`
  .${treePrefixCls} {
    /* padding-left: 24px; */
    user-select: none;
    &-focused:not(&-active-focused) {
      border-color: cyan;
    }

    // padding: 5px;
    .${treeNodePrefixCls} {
      margin: 0;
      padding: 0;
      white-space: nowrap;
      list-style: none;
      outline: 0;
      display: flex;
      align-items: center;
      height: auto;
      .draggable {
        color: #333;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        /* Required to make elements draggable in old WebKit */
        -khtml-user-drag: element;
        -webkit-user-drag: element;
      }
      &:hover {
        background-color: ${theme.palettes.grey._100};
      }
      &-selected {
        background-color: ${theme.palettes.grey._100};
      }
      &.drop-container {
        > .draggable::after {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          box-shadow: inset 0 0 0 2px red;
          content: "";
        }
        & ~ .${treeNodePrefixCls} {
          border-left: 2px solid chocolate;
        }
      }
      &.drop-target {
        background-color: yellowgreen;
        & ~ .${treeNodePrefixCls} {
          border-left: none;
        }
      }
      &.filter-node {
        > .${treePrefixCls}-node-content-wrapper {
          color: #a60000 !important;
          font-weight: bold !important;
        }
      }
      ul {
        /* margin: 0; */
        /* padding: 0 0 0 18px; */
      }
      .${treePrefixCls}-node-content-wrapper {
        position: relative;
        width: auto;
        height: 100%;
        margin: 0;
        padding: 0;
        text-decoration: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        flex: 1 0 auto;
      }
      span {
        &.${treePrefixCls}-switcher, &.${treePrefixCls}-checkbox {
          display: inline-block;
          width: 16px;
          height: 16px;
          /* margin-right: 2px; */
          line-height: 16px;
          vertical-align: middle;
          border: 0 none;
          outline: none;
          cursor: pointer;
          &.${treePrefixCls}-icon__customize {
            background-image: none;
          }
        }
        &.${treePrefixCls}-icon_loading {
          margin-right: 2px;
          vertical-align: top;
          background: url("data:image/gif;base64,R0lGODlhEAAQAKIGAMLY8YSx5HOm4Mjc88/g9Ofw+v///wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgAGACwAAAAAEAAQAAADMGi6RbUwGjKIXCAA016PgRBElAVlG/RdLOO0X9nK61W39qvqiwz5Ls/rRqrggsdkAgAh+QQFCgAGACwCAAAABwAFAAADD2hqELAmiFBIYY4MAutdCQAh+QQFCgAGACwGAAAABwAFAAADD1hU1kaDOKMYCGAGEeYFCQAh+QQFCgAGACwKAAIABQAHAAADEFhUZjSkKdZqBQG0IELDQAIAIfkEBQoABgAsCgAGAAUABwAAAxBoVlRKgyjmlAIBqCDCzUoCACH5BAUKAAYALAYACgAHAAUAAAMPaGpFtYYMAgJgLogA610JACH5BAUKAAYALAIACgAHAAUAAAMPCAHWFiI4o1ghZZJB5i0JACH5BAUKAAYALAAABgAFAAcAAAMQCAFmIaEp1motpDQySMNFAgA7")
            no-repeat scroll 0 0 transparent;
        }
        &.${treePrefixCls}-switcher {
          &.${treePrefixCls}-switcher-noop {
            min-width: 16px;
            cursor: auto;
          }
          &.${treePrefixCls}-switcher_open {
            background-image: url(${SvgIconArrowRight});
            transform: rotate(90deg);
          }
          &.${treePrefixCls}-switcher_close {
            background-image: url(${SvgIconArrowRight});
          }
        }
        &.${treePrefixCls}-checkbox {
          width: 30px;
          min-width: 30px;
          height: 100%;
          margin: 0;
          background-image: url(${SvgIconCheckboxUnChecked});
          background-repeat: no-repeat;
          background-position: center;

          &-checked {
            background-image: url(${SvgIconCheckboxChecked});
          }
          &-disabled {
            background-position: 0 -56px;
          }
        }
      }
    }
    &-child-tree {
      display: none;
      &-open {
        display: block;
      }
    }
    &-treenode-disabled {
      > span:not(.${treePrefixCls}-switcher),
      > a,
      > a span {
        color: #767676;
        cursor: not-allowed;
      }
    }
    &-treenode-active {
      background: rgba(0, 0, 0, 0.1);

      // .${treePrefixCls}-node-content-wrapper {
      //   background: rgba(0, 0, 0, 0.1);
      // }
    }
    &-node-selected {
      /* background-color: ${theme.palettes.grey._100}; */
    }
    // isLeaf:false icon (open)
    &-icon__open {
      display: none;
    }
    // isLeaf:false icon (close)
    &-icon__close {
      display: none;
    }
    // isLeaf:true icon
    &-icon__docu {
      display: none;
    }
    &-icon__customize {
      margin-right: 2px;
      vertical-align: top;
    }
    &-title {
      padding: 0 5px;
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      color: ${theme.palettes.grey._1100};
    }
    &-indent {
      display: inline-block;
      vertical-align: bottom;
      height: 0;
    }
    &-indent-unit {
      width: 13px;
      display: inline-block;
    }
  }
`;

export default treeCss;
