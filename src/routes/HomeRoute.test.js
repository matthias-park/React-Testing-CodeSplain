import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HomeRoute from "./HomeRoute";
import { createServer } from "../test/server";

createServer([
  {
    path: "/api/repositories",
    method: "get",
    res: (req) => {
      const language = req.url.searchParams.get("q").split("language:")[1];
      return {
        items:  [
          {
            id: 1,
            full_name: `${language} 1`,
          },
          {
            id: 2,
            full_name: `${language} 2`,
          },
        ],
      };
    },
  },
]);

test("renders two links for each language", async () => {
  render(
    <MemoryRouter>
      <HomeRoute />
    </MemoryRouter>
  );

  // const pause = () => new Promise(resolve => {
  //   setTimeout(resolve, 100)
  // })

  // Loop over each language
  const languages = [
    "javascript",
    "typescript",
    "rust",
    "go",
    "python",
    "java",
  ];
  for (let language of languages) {
    // For each language, make sure we see two links
    const links = await screen.findAllByRole("link", {
      name: new RegExp(`${language} `),
    });

    expect(links).toHaveLength(2);
    // Assert that the links have the appropriate full_name
    expect(links[0]).toHaveTextContent(`${language} 1`);
    expect(links[1]).toHaveTextContent(`${language} 2`);
    expect(links[0]).toHaveAttribute("href", `/repositories/${language} 1`);
    expect(links[1]).toHaveAttribute("href", `/repositories/${language} 2`);
  }
});
