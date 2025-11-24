import { useTheme, alpha, Button } from "@mui/material";
import ButtonWithBackground from "../atom/ButtonWithBackground";
import { CloseCircle, TickCircle, Timer } from "iconsax-react";
import useFetchTable from "../../hook/useFetchTable";
import BaseTable from "../organism/BaseTable";
import type { TableConfig } from "../../types/types";
import { Link } from "react-router-dom";
import { Twitter } from "@mui/icons-material";

const tableData = [
  {
    id: "8738284712",
    sector: "Lukla–Makalu",
    agent: "Ahilo",
    price: "23,0000",
    flight_date: "23rd Oct,2025",
    pax: 7,
    status: "approved",
  },
];
const EmailTemplate = () => {
  const theme = useTheme();
  const customHeaders = {
    id: "ID",
    sector: "Sector",
    agent: "Agent",
    price: "Price",
    flight_date: "Flight Date",
    pax: "No. of Pax",
    status: "Status",
  };

  const customRenderer = {
    status: (info: any) => {
      const value: string = info.getValue();

      if (!value) {
        return <span>-</span>;
      }

      const map: Record<string, { icon: React.ReactNode; color: string }> = {
        approved: {
          icon: (
            <TickCircle
              size="20"
              color={theme.palette.success.main}
              variant="Bold"
            />
          ),
          color: theme.palette.success.main,
        },

        pending: {
          icon: (
            <Timer
              size="20"
              color={theme.palette.warning.main}
              variant="Bold"
            />
          ),
          color: theme.palette.warning.main,
        },

        rejected: {
          icon: (
            <CloseCircle
              size="20"
              color={theme.palette.error.main}
              variant="Bold"
            />
          ),
          color: theme.palette.error.main,
        },

        "not-approved": {
          icon: (
            <CloseCircle
              size="20"
              color={theme.palette.error.main}
              variant="Bold"
            />
          ),
          color: theme.palette.error.main,
        },
      };

      const config = map[value];

      // Fallback (if value doesn't match any key)
      if (!config) return <span>{value}</span>;

      return (
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "6px 12px",
            borderRadius: "20px",
            fontWeight: 500,
            backgroundColor: alpha(config.color, 0.15),
            color: config.color,
            textTransform: "capitalize",
            fontSize: "0.8rem",
            fontFamily: "sans-serif",
          }}
        >
          {config.icon} {value.replace("-", " ")}
        </span>
      );
    },
  };

  const { rowData, columns } = useFetchTable({
    data: tableData,
    columnsToHide: [],
    customRenderer,
    customHeaders,
  });

  const tableConfig: TableConfig = {
    showFooter: false,
    showHeader: false,
  };

  return (
    <div className={`py-7 bg-white rounded-3xl flex flex-col gap-9 px-4`}>
      <div className="flex justify-between items-center px-7 py-4 border-b border-[#E4E3E3]">
        <img src="/logo.svg" alt="" className="max-w-[158px] object-cover" />
        <div className="flex flex-col font-medium">
          <span className="text-[#1D1F1E] text-md">29th Oct,2025</span>
          <span className="text-[#525753] text-sm">Wednesday, 9:13 AM</span>
        </div>
      </div>
      <div className=" flex flex-col gap-9 ">
        <div className="flex items-center py-1 gap-4 justify-center px-8">
          <ButtonWithBackground size={40}>
            <TickCircle
              color={theme.palette.primary.main}
              variant="Bold"
              size={24}
            />
          </ButtonWithBackground>
          <h4 className="font-semibold text-2xl">
            Your flight has been reserved!{" "}
          </h4>
        </div>
        <p className="px-8 text-lg flex flex-col">
          <span className="pb-2"> Hi,</span>
          <span>
            This is to inform you that your flight ID No.23456345 has been
            reserved on 23rd March,2025 at 4:00PM. We’re excited to have you on
            board. Looking forward to seeing you on boarding day.
          </span>
        </p>
        <div className="px-8">
          <BaseTable
            columns={columns}
            data={rowData}
            heaaderConfig={tableConfig}
          />
          <div
            className="h-16 flex justify-between items-center rounded-lg px-8 mt-9"
            style={{
              boxShadow: "0px 4px 16px 0px #FF00003D",
              border: " 1px solid #C10308",
              background: " #FFEDEEDE",
            }}
          >
            <p className="font-semibold">Total payable to Air dynasty</p>
            <p className="font-medium">$1,02,000</p>
          </div>
        </div>
        <p className="px-8 text-lg">
          Thank you taking part in this. We appreciated you for taking part in
          this. We will make your journey as beautiful as future goes bright and
          prosperous and fruitful that you wont forget about it. Hope to see you
          soon. I hope you will enjoy your flight.
        </p>
        <p className="px-8 text-lg flex flex-col">
          <span>With Best Regards,</span> <span>Air Dynasty</span>{" "}
          <span>Kamladi, Kathmadu</span>
        </p>
        <p className="px-8 text-lg">
          If you need help in anything, don’t hesitate to email us on{" "}
          <a
            href="mailto:sales@airdynastyheli.com"
            className={`text-[#C10308] border-b border-[#C10308]`}
          >
            sales@airdynastyheli.com
          </a>
          .
        </p>
        <div className="mx-auto">
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              width: "max-content",
              padding: "12px 24px",
            }}
          >
            Download Content
          </Button>
        </div>
      </div>

      {/* //footer  */}
      <div className="bg-[#FFEDEEDE] p-[52px] rounded-4xl">
        <div className="max-w-sm mx-auto">
          <div className="flex justify-center gap-4 items-center">
            <Link to="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="h-8 w-8 bg-[#C10308] rounded-full p-1"
                fill="white"
              >
                <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" />
              </svg>
            </Link>
            <Link to="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="h-8 w-8 bg-[#C10308] rounded-full p-1"
                fill="white"
              >
                <path d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z" />
              </svg>
            </Link>
            <Link to="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="h-8 w-8 bg-[#C10308] rounded-full p-1"
                fill="white"
              >
                <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" />
              </svg>
            </Link>
          </div>
          <ul className="flex justify-center mt-3.5">
            <li>
              <Link
                to="#"
                className="text-[#D92D20] text-sm font-medium border-r px-2"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-[#D92D20] text-sm font-medium border-r px-2"
              >
                Help
              </Link>
            </li>
            <li>
              <Link to="#" className="text-[#D92D20] text-sm font-medium px-2">
                About Us
              </Link>
            </li>
          </ul>
          <p className="text-sm font-medium text-[#858585] text-center mt-3.5">
            You’ve received this email because you’ve request for flight from
            Air Dynasty.
          </p>
          <p className="text-sm font-medium text-[#858585] text-center mt-3.5">
            <span className="block pb-1">Copyright © 2025 Air Dynasty.</span>
            <span>All rights reserved.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailTemplate;
