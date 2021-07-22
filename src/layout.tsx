/** @jsxImportSource @emotion/react */
import { css, Interpolation, Theme } from "@emotion/react";
import React, { useEffect, useRef, useState } from "react";
import { theme } from "./uc-theme-provider";
import { ReactComponent as SvgIconMy } from "../icons/icon-my.svg";
import { ReactComponent as SvgIconChannel } from "../icons/icon-channel.svg";
import { ReactComponent as SvgIconCommunication } from "../icons/icon-communication.svg";
import { ReactComponent as SvgIconCollaboration } from "../icons/icon-collaboration.svg";
import { ReactComponent as SvgIconRoutine } from "../icons/icon-routine.svg";
import { ReactComponent as SvgIconInfo } from "../icons/icon-info.svg";
import { ReactComponent as SvgBtnMember } from "../icons/btn-member.svg";
import { ReactComponent as SvgBtnChat } from "../icons/btn-chat.svg";
import { ReactComponent as SvgBtnMessage } from "../icons/btn-message.svg";
import { ReactComponent as SvgBtnCall } from "../icons/btn-call.svg";
import { ReactComponent as SvgBtnVideoConference } from "../icons/btn-video-conference.svg";
import { ReactComponent as SvgBtnSms } from "../icons/btn-sms.svg";
import { ReactComponent as SvgBtnProject } from "../icons/btn-project.svg";
import { ReactComponent as SvgBtnTodo } from "../icons/btn-todo.svg";
import { ReactComponent as SvgBtnSchedule } from "../icons/btn-schedule.svg";
import { ReactComponent as SvgBtnDrive } from "../icons/btn-drive.svg";
import { ReactComponent as SvgBtnVote } from "../icons/btn-vote.svg";
import { ReactComponent as SvgBtnElectronicApproval } from "../icons/btn-electronic-approval.svg";
import { ReactComponent as SvgBtnAttendance } from "../icons/btn-attendance.svg";
import { ReactComponent as SvgBtnCompanyRules } from "../icons/btn-company-rules.svg";
import { ReactComponent as SvgBtnOutsiderRegister } from "../icons/btn-outsider-register.svg";
import { ReactComponent as SvgBtnForm } from "../icons/btn-form.svg";
import { ReactComponent as SvgBtnWeeklyReport } from "../icons/btn-weekly-report.svg";
import { ReactComponent as SvgBtnMeetingRoom } from "../icons/btn-meeting-room.svg";
import { ReactComponent as SvgBtnNotice } from "../icons/btn-notice.svg";
import { ReactComponent as SvgBtnBoard } from "../icons/btn-board.svg";
import { ReactComponent as SvgBtnUcBot } from "../icons/btn-u-cbot.svg";
import { ReactComponent as SvgBtnRss } from "../icons/btn-rss.svg";

interface Props {
  children: JSX.Element | JSX.Element[];
  menuComponent?: JSX.Element;
}

interface SvgWrapperProps {
  children: JSX.Element;
  title: string;
  override?: Interpolation<Theme>;
}

// function useOnClickOutside(rootRef: any, ref: any, handler: any) {
//   useEffect(() => {
//     const listener = (event: any) => {
//       // Do nothing if clicking ref's element or descendent elements
//       if (
//         !ref.current ||
//         ref.current.contains(event.target) ||
//         rootRef.current.contains(event.target)
//       ) {
//         return;
//       }
//       handler(event);
//     };

//     document.addEventListener("mousedown", listener);
//     document.addEventListener("touchstart", listener);

//     return () => {
//       document.removeEventListener("mousedown", listener);
//       document.removeEventListener("touchstart", listener);
//     };
//   }, [ref, handler]);
// }

const SvgWrapper = ({ children, title, override }: SvgWrapperProps) => {
  return (
    <figure
      css={[
        css`
          width: 76px;
          height: 76px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          &:hover > figcaption {
            color: ${theme.palettes.primary._500};
          }

          &:hover path[fill="#555"] {
            fill: ${theme.palettes.primary._500};
          }

          &:hover path[fill="#666"] {
            fill: ${theme.palettes.primary._500};
          }

          &:hover g[fill="#555"] {
            fill: ${theme.palettes.primary._500};
          }

          &:hover path[stroke="#666"] {
            stroke: ${theme.palettes.primary._500};
          }

          &:hover rect[stroke="#666"] {
            stroke: ${theme.palettes.primary._500};
          }

          &:hover g[stroke="#666"] {
            stroke: ${theme.palettes.primary._500};
          }

          &:hover circle[fill="#666"] {
            fill: ${theme.palettes.primary._500};
          }

          &:hover circle[stroke="#666"] {
            stroke: ${theme.palettes.primary._500};
          }

          &:hover text[fill="#666"] {
            fill: ${theme.palettes.primary._500};
          }

          cursor: pointer;
        `,
        override,
      ]}
    >
      <div
        css={css`
          text-align: center;
        `}
      >
        {children}
      </div>
      <figcaption
        css={css`
          text-align: center;
          margin-top: 2px;
          color: ${theme.palettes.grey._1100};
          font-size: 0.86rem;
          font-weight: bold;
        `}
      >
        {title}
      </figcaption>
    </figure>
  );
};

export default function Layout({ menuComponent, children }: Props) {
  // const [currentRoute, setCurrentRoute] = useState<number | undefined>();
  // const routeRootRef = useRef<HTMLDivElement>(null);
  const routeRef = useRef<HTMLDivElement | null>(null);
  // useOnClickOutside(routeRootRef, routeRef, () => {
  //   setCurrentRoute(undefined);
  // });

  const HoverIconWrapper = ({
    children,
    override,
  }: {
    children: JSX.Element[];
    override?: Interpolation<Theme>;
  }) => {
    const [entryChild, ...restChild] = children;

    return (
      <div
        css={[
          css`
            position: relative;
            height: 90px;
            &:hover {
              & > div {
                display: grid;
              }
            }
          `,
          override,
        ]}
        // ref={currentRoute === idx ? routeRef : null}
      >
        <button
          // onClick={() => {
          //   if (currentRoute === idx) {
          //     setCurrentRoute(undefined);
          //   } else {
          //     setCurrentRoute(idx);
          //   }
          // }}
          css={buttonCss}
        >
          {entryChild}
        </button>
        {/* {currentRoute === idx && <div css={boxCss}>{restChild}</div>} */}
        <div css={boxCss}>{restChild}</div>
      </div>
    );
  };

  return (
    <>
      <header
        css={css`
          width: 100vw;
          height: 76px;
          display: flex;
          justify-content: center;
          box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        `}
      >
        <div
          css={css`
            display: flex;
          `}
        >
          <SvgWrapper title="MY">
            <SvgIconMy />
          </SvgWrapper>

          <SvgWrapper title="채널">
            <SvgIconChannel />
          </SvgWrapper>

          <HoverIconWrapper>
            <SvgWrapper title="소통">
              <SvgIconCommunication />
            </SvgWrapper>
            <SvgWrapper title="멤버">
              <SvgBtnMember />
            </SvgWrapper>
            <SvgWrapper title="대화">
              <SvgBtnChat />
            </SvgWrapper>
            <SvgWrapper title="쪽지">
              <SvgBtnMessage />
            </SvgWrapper>
            <SvgWrapper title="전화">
              <SvgBtnCall />
            </SvgWrapper>
            <SvgWrapper title="화상회의">
              <SvgBtnVideoConference />
            </SvgWrapper>
            <SvgWrapper title="SMS">
              <SvgBtnSms />
            </SvgWrapper>
          </HoverIconWrapper>

          <HoverIconWrapper>
            <SvgWrapper title="협업">
              <SvgIconCollaboration />
            </SvgWrapper>
            <SvgWrapper title="프로젝트">
              <SvgBtnProject />
            </SvgWrapper>
            <SvgWrapper title="할일">
              <SvgBtnTodo />
            </SvgWrapper>
            <SvgWrapper title="일정">
              <SvgBtnSchedule />
            </SvgWrapper>
            <SvgWrapper title="드라이브">
              <SvgBtnDrive />
            </SvgWrapper>
            <SvgWrapper title="설문">
              <SvgBtnVote />
            </SvgWrapper>
          </HoverIconWrapper>

          <HoverIconWrapper>
            <SvgWrapper title="업무">
              <SvgIconRoutine />
            </SvgWrapper>
            <SvgWrapper title="전자결재">
              <SvgBtnElectronicApproval />
            </SvgWrapper>
            <SvgWrapper title="근태">
              <SvgBtnAttendance />
            </SvgWrapper>
            <SvgWrapper title="사규">
              <SvgBtnCompanyRules />
            </SvgWrapper>
            <SvgWrapper title="회의실">
              <SvgBtnMeetingRoom />
            </SvgWrapper>
            <SvgWrapper title="외부인등록">
              <SvgBtnOutsiderRegister />
            </SvgWrapper>
            <SvgWrapper title="양식함">
              <SvgBtnForm />
            </SvgWrapper>
            <SvgWrapper title="주간보고">
              <SvgBtnWeeklyReport />
            </SvgWrapper>
          </HoverIconWrapper>

          <HoverIconWrapper
            override={css`
              & > div {
                bottom: -105px;
                height: 110px;
              }
            `}
          >
            <SvgWrapper title="정보">
              <SvgIconInfo />
            </SvgWrapper>
            <SvgWrapper title="공지사항">
              <SvgBtnNotice />
            </SvgWrapper>
            <SvgWrapper title="사내게시판">
              <SvgBtnBoard />
            </SvgWrapper>
            <SvgWrapper title="UC봇">
              <SvgBtnUcBot />
            </SvgWrapper>
            <SvgWrapper title="RSS">
              <SvgBtnRss />
            </SvgWrapper>
          </HoverIconWrapper>
        </div>
      </header>
      <aside>aside</aside>
      <main>{children}</main>
    </>
  );
}

const buttonCss = css`
  padding: 0;
  border: 0;
  background-color: white;
`;

const boxCss = css`
  position: absolute;
  bottom: -195px;
  left: 50%;
  transform: translateX(-50%);
  width: 340px;
  height: 200px;
  display: none;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;

  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.18);
  background-color: white;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 0;
    height: 0;
    top: -10px;
    border: 1em solid black;
    border-color: white white white white;
    transform: rotate(-45deg);

    box-shadow: 5px -5px 10px -5px rgb(0 0 0 / 18%);
  }
`;
