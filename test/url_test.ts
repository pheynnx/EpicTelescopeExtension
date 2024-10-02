import { assertEquals } from "jsr:@std/assert";
import { buildUrl } from "../Extension/functions.js";

Deno.test("test sherlock url", () => {
  const output = buildUrl("sherlock nothing");
  assertEquals(
    output,
    "https://sherlock.epic.com/default.aspx?view=slg/search#txt=nothing"
  );
});

Deno.test("test slg string url", () => {
  const output = buildUrl("slg nothing");
  assertEquals(
    output,
    "https://sherlock.epic.com/default.aspx?view=slg/search#txt=nothing"
  );
});

Deno.test("test slg empty url", () => {
  const output = buildUrl("slg");
  assertEquals(output, "https://sherlock.epic.com/default.aspx?view=slg/home");
});

Deno.test("test slg id url", () => {
  const output = buildUrl("slg 9016152");
  assertEquals(
    output,
    "https://sherlock.epic.com/default.aspx?view=slg/search#id=9016152&rv=0"
  );
});

Deno.test("test sherlock two word url", () => {
  const output = buildUrl("sherlock nothing nothing");
  assertEquals(
    output,
    "https://sherlock.epic.com/default.aspx?view=slg/search#txt=nothing%20nothing"
  );
});

Deno.test("test ra url", () => {
  const output = buildUrl("ra nothing");
  assertEquals(
    output,
    "https://sherlock.epic.com/default.aspx?view=ra/search#txt=nothing"
  );
});

Deno.test("test nova url", () => {
  const output = buildUrl("nova nothing");
  assertEquals(
    output,
    "https://nova.epic.com/Search.aspx#addPt1&SearchTerm=nothing"
  );
});

Deno.test("test topic url", () => {
  const output = buildUrl("topic nothing");
  assertEquals(output, "https://userweb.epic.com/Search?Query=nothing");
});

Deno.test("test galaxy url", () => {
  const output = buildUrl("galaxy nothing");
  assertEquals(output, "https://galaxy.epic.com/?#Search/searchWord=nothing");
});

Deno.test("test dh url", () => {
  const output = buildUrl("dh nothing");
  assertEquals(
    output,
    "https://datahandbook.epic.com/Search/Index?SearchWord=nothing&type=1&scf=1,2,3&auf=1"
  );
});

Deno.test("test cdd url", () => {
  const output = buildUrl("cdd nothing");
  assertEquals(
    output,
    "https://datahandbook.epic.com/Search/Index?SearchWord=nothing&type=6"
  );
});

Deno.test("test webserv url", () => {
  const output = buildUrl("webserv nothing");
  assertEquals(
    output,
    "https://datahandbook.epic.com/Search/Index?SearchWord=nothing&type=5&def=0"
  );
});

Deno.test("test pg url", () => {
  const output = buildUrl("pg nothing");
  assertEquals(
    output,
    "https://datahandbook.epic.com/Search/Index?SearchWord=nothing&type=2"
  );
});

Deno.test("test metric url", () => {
  const output = buildUrl("metric nothing");
  assertEquals(
    output,
    "https://datahandbook.epic.com/Search/Index?SearchWord=nothing&type=4"
  );
});

Deno.test("test system community library", () => {
  const output = buildUrl("cl blood infusion");
  assertEquals(output, "https://comlib.epic.com/#?query=blood%20infusion");
});

Deno.test("test system pulse url", () => {
  const output = buildUrl("sp");
  assertEquals(output, "https://systempulse.epic.com");
});
