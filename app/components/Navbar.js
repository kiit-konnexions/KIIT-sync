import React from "react";

const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center px-6 min-w-full">
      <div className=" font-bold text-black">
        Kiit <span className=" font-medium">Sync</span>
      </div>
      <img
        src="https://s3-alpha-sig.figma.com/img/f550/ac72/f71a0a007c97139193758102cb953fdc?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fdo~9y10xS9SI~zrpwhQcXfAtrYFZ9Sif7eXgd1-c2uTFhykF7X60T6ETCq1-6rFQGqTZlWJlOZKgy5Mq-CyXZMlF6RxZbYy~GSB1hr9IesU0NTb2xqSY3urZ739WWZO-IXJbB7YJ6tHq8knepKWE5loTb1-BG1eiwUjdIMxlwHuCCRxL9m63VkekuqVl2qVmE0Lm~muA7fmOaEJa7P2hd~PpCk9ZuQGHQ3SKBmdgmmk3DoRasAaiRvJSiKkDsleQyy6UVs6CkC08IRgJXtQmV0pcAP9B3V2ay1K0DAfyKnJNyJgu5NZDjJZTEP5-MITb2hgCFgLLPCd3EK46Brf-w__"
        style={{ height: "50px", width: "55px" }}
      ></img>
    </nav>
  );
};

export default Navbar;
