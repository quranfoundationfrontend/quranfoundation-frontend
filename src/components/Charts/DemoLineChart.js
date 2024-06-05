import * as React from "react";
import LineChart from "@cloudscape-design/components/line-chart";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";

const DemoLineChart = () => {
  return (
    <LineChart
      series={[
        {
          title: "Site 1",
          type: "line",
          data: [
            { x: new Date(1600972200000), y: 58020 },
            { x: new Date(1600973100000), y: 102402 },
            { x: new Date(1600974000000), y: 104920 },
            { x: new Date(1600974900000), y: 94031 },
            { x: new Date(1600975800000), y: 125021 },
            { x: new Date(1600976700000), y: 159219 },
            { x: new Date(1600977600000), y: 193082 },
            { x: new Date(1600978500000), y: 162592 },
            { x: new Date(1600979400000), y: 274021 },
            { x: new Date(1600980300000), y: 264286 },
            { x: new Date(1600981200000), y: 289210 },
            { x: new Date(1600982100000), y: 256362 },
            { x: new Date(1600983000000), y: 257306 },
            { x: new Date(1600983900000), y: 186776 },
            { x: new Date(1600984800000), y: 294020 },
            { x: new Date(1600985700000), y: 385975 },
            { x: new Date(1600986600000), y: 486039 },
            { x: new Date(1600987500000), y: 490447 },
            { x: new Date(1600988400000), y: 361845 },
            { x: new Date(1600989300000), y: 339058 },
            { x: new Date(1600990200000), y: 298028 },
            { x: new Date(1600991100000), y: 231902 },
            { x: new Date(1600992000000), y: 224558 },
            { x: new Date(1600992900000), y: 253901 },
            { x: new Date(1600993800000), y: 102839 },
            { x: new Date(1600994700000), y: 234943 },
            { x: new Date(1600995600000), y: 204405 },
            { x: new Date(1600996500000), y: 190391 },
            { x: new Date(1600997400000), y: 183570 },
            { x: new Date(1600998300000), y: 162592 },
            { x: new Date(1600999200000), y: 148910 },
            { x: new Date(1601000100000), y: 229492 },
            { x: new Date(1601001000000), y: 293910 }
          ],
          valueFormatter: function numberFormatter(e) {
            return Math.abs(e) >= 1e9
              ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                  "G"
              : Math.abs(e) >= 1e6
              ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                "M"
              : Math.abs(e) >= 1e3
              ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                "K"
              : e.toFixed(2);
          }
        },
        {
          title: "Site 2",
          type: "line",
          data: [
            { x: new Date(1600972200000), y: 151023 },
            { x: new Date(1600973100000), y: 169975 },
            { x: new Date(1600974000000), y: 176980 },
            { x: new Date(1600974900000), y: 168852 },
            { x: new Date(1600975800000), y: 149130 },
            { x: new Date(1600976700000), y: 147299 },
            { x: new Date(1600977600000), y: 169552 },
            { x: new Date(1600978500000), y: 163401 },
            { x: new Date(1600979400000), y: 154091 },
            { x: new Date(1600980300000), y: 199516 },
            { x: new Date(1600981200000), y: 195503 },
            { x: new Date(1600982100000), y: 189953 },
            { x: new Date(1600983000000), y: 181635 },
            { x: new Date(1600983900000), y: 192975 },
            { x: new Date(1600984800000), y: 205951 },
            { x: new Date(1600985700000), y: 218958 },
            { x: new Date(1600986600000), y: 220516 },
            { x: new Date(1600987500000), y: 213557 },
            { x: new Date(1600988400000), y: 165899 },
            { x: new Date(1600989300000), y: 173557 },
            { x: new Date(1600990200000), y: 172331 },
            { x: new Date(1600991100000), y: 186492 },
            { x: new Date(1600992000000), y: 131541 },
            { x: new Date(1600992900000), y: 142262 },
            { x: new Date(1600993800000), y: 194091 },
            { x: new Date(1600994700000), y: 185899 },
            { x: new Date(1600995600000), y: 173401 },
            { x: new Date(1600996500000), y: 171635 },
            { x: new Date(1600997400000), y: 179130 },
            { x: new Date(1600998300000), y: 185951 },
            { x: new Date(1600999200000), y: 144091 },
            { x: new Date(1601000100000), y: 152975 },
            { x: new Date(1601001000000), y: 157299 }
          ],
          valueFormatter: function numberFormatter(e) {
            return Math.abs(e) >= 1e9
              ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                  "G"
              : Math.abs(e) >= 1e6
              ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                "M"
              : Math.abs(e) >= 1e3
              ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                "K"
              : e.toFixed(2);
          }
        },
        {
          title: "Performance goal",
          type: "threshold",
          y: 250000,
          valueFormatter: function numberFormatter(e) {
            return Math.abs(e) >= 1e9
              ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                  "G"
              : Math.abs(e) >= 1e6
              ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                "M"
              : Math.abs(e) >= 1e3
              ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                "K"
              : e.toFixed(2);
          }
        }
      ]}
      xDomain={[
        new Date(1600972200000),
        new Date(1601001000000)
      ]}
      yDomain={[0, 500000]}
      i18nStrings={{
        xTickFormatter: e =>
          e
            .toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: !1
            })
            .split(",")
            .join("\n"),
        yTickFormatter: function numberFormatter(e) {
          return Math.abs(e) >= 1e9
            ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                "G"
            : Math.abs(e) >= 1e6
            ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
              "M"
            : Math.abs(e) >= 1e3
            ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
              "K"
            : e.toFixed(2);
        }
      }}
      ariaLabel="Multiple data series line chart"
      height={300}
      hideFilter
      xScaleType="time"
      xTitle="Time (UTC)"
      yTitle="Bytes transferred"
      empty={
        <Box textAlign="center" color="inherit">
          <b>No data available</b>
          <Box variant="p" color="inherit">
            There is no data available
          </Box>
        </Box>
      }
      noMatch={
        <Box textAlign="center" color="inherit">
          <b>No matching data</b>
          <Box variant="p" color="inherit">
            There is no matching data to display
          </Box>
          <Button>Clear filter</Button>
        </Box>
      }
    />
  );
}

export default DemoLineChart