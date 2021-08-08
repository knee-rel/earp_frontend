import React, { useState, useEffect } from "react";
import Image from "next/image";

const ContactContainer = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (open) {
      window.$crisp.push(["do", "chat:open"]);
      setOpen(false);
    }
  }, [open]);
  return (
    <div className="flex flex-col flex-wrap p-10 md:flex-row md:px-40 md:py-20">
      <div className="flex flex-col w-full md:w-1/2">
        <p className="text-2xl lg:text-4xl md:text-3xl font-fredoka">
          Contact Us.
        </p>
        <div className="flex flex-col">
          <div className="flex p-5">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400">
              <i className="text-white fill-current fab fa-facebook-messenger fa-lg" />
            </div>
            <div className="flex flex-col px-5">
              <p className="text-lg font-bold xl:text-2xl lg:text-xl">
                Chat with Us
              </p>
              <p>
                Open in&nbsp;
                <span
                  className="font-bold cursor-pointer text-seagreen hover:underline"
                  onClick={handleOpen}
                >
                  Instagram
                </span>
              </p>
            </div>
          </div>
          <div className="flex p-5">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400">
              <i className="text-white fill-current fas fa-phone-alt fa-lg" />
            </div>
            <div className="flex flex-col px-5">
              <p className="text-lg font-bold xl:text-2xl lg:text-xl">
                Let's talk
              </p>
              <p>
                Cell no. <span className="font-bold">+63 956 502 7725 </span>
              </p>
            </div>
          </div>
          <div className="flex p-5">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400">
              <i className="text-white fill-current fas fa-envelope fa-lg" />
            </div>
            <div className="flex flex-col px-5">
              <p className="text-lg font-bold xl:text-2xl lg:text-xl">
                Shoot us an email
              </p>
              <p>
                Email: <span className="font-bold">earp@worldwide</span>
              </p>
            </div>
          </div>
          <div className="flex p-5">
            <div className="flex items-center justify-center w-20 h-12 px-1 rounded-full md:px-0 md:w-10 bg-yellow-400">
              <i className="text-white fill-current fas fa-map-marker-alt fa-lg" />
            </div>
            <div className="flex flex-col px-5">
              <p className="text-lg font-bold xl:text-2xl lg:text-xl">
                Visit our stores
              </p>
              <div className="flex">
                <p>
                  Toronto, Canada | Louisianna, Missouri | London, United
                  Kingdom
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full md:w-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="489.94"
          height="432.615"
          viewBox="0 0 489.94 432.615"
        >
          <g id="undraw_Online_information_re_erks" transform="translate(0 0)">
            <path
              id="Path_377"
              data-name="Path 377"
              d="M703.77,429.094h-412.3a12.558,12.558,0,0,1-12.544-12.544V184.073H716.314V416.551A12.558,12.558,0,0,1,703.77,429.094Z"
              transform="translate(-278.045 -169.931)"
              fill="#e6e6e6"
            />
            <path
              id="Path_378"
              data-name="Path 378"
              d="M694.455,412.656H314.968a6.469,6.469,0,0,1-6.462-6.462V222.117a6.469,6.469,0,0,1,6.462-6.462H694.455a6.469,6.469,0,0,1,6.462,6.462V406.194A6.469,6.469,0,0,1,694.455,412.656Z"
              transform="translate(-285.138 -177.504)"
              fill="#fff"
            />
            <path
              id="Path_379"
              data-name="Path 379"
              d="M716.915,188.086H277.769V178.015a12.558,12.558,0,0,1,12.544-12.544H704.371a12.558,12.558,0,0,1,12.544,12.544Z"
              transform="translate(-277.769 -165.471)"
              fill="#013f82"
            />
            <path
              id="Path_380"
              data-name="Path 380"
              d="M411.739,364H344.2a6.469,6.469,0,0,1-6.462-6.462v-44.4a6.469,6.469,0,0,1,6.462-6.462h67.543a6.469,6.469,0,0,1,6.462,6.462v44.4A6.469,6.469,0,0,1,411.739,364Z"
              transform="translate(-292.146 -199.327)"
              fill="#e6e6e6"
            />
            <path
              id="Path_381"
              data-name="Path 381"
              d="M722.283,313.862H508.875a3.594,3.594,0,0,1,0-7.188H722.283a3.594,3.594,0,1,1,0,7.188Z"
              transform="translate(-332.319 -199.327)"
              fill="#e6e6e6"
            />
            <path
              id="Path_382"
              data-name="Path 382"
              d="M722.283,347.682H508.875a3.594,3.594,0,0,1,0-7.188H722.283a3.594,3.594,0,0,1,0,7.188Z"
              transform="translate(-332.319 -207.436)"
              fill="#e6e6e6"
            />
            <path
              id="Path_383"
              data-name="Path 383"
              d="M722.283,381.5H508.875a3.594,3.594,0,0,1,0-7.188H722.283a3.594,3.594,0,1,1,0,7.188Z"
              transform="translate(-332.319 -215.546)"
              fill="#e6e6e6"
            />
            <path
              id="Path_384"
              data-name="Path 384"
              d="M415.21,544.973h-9.32l-4.434-35.95h13.756Z"
              transform="translate(-96.257 -122.048)"
              fill="#a0616a"
            />
            <path
              id="Path_385"
              data-name="Path 385"
              d="M394.962,552.808h17.975v11.317H383.644A11.317,11.317,0,0,1,394.962,552.808Z"
              transform="translate(-91.986 -132.547)"
              fill="#2f2e41"
            />
            <path
              id="Path_386"
              data-name="Path 386"
              d="M466.21,544.973h-9.32l-4.434-35.95h13.756Z"
              transform="translate(-108.485 -122.048)"
              fill="#a0616a"
            />
            <path
              id="Path_387"
              data-name="Path 387"
              d="M445.962,552.808h17.975v11.317H434.644A11.317,11.317,0,0,1,445.962,552.808Z"
              transform="translate(-104.214 -132.547)"
              fill="#2f2e41"
            />
            <path
              id="Path_388"
              data-name="Path 388"
              d="M729.894,661.7h-9.487A3.441,3.441,0,0,1,717,658.56l-8.041-96.853a1.14,1.14,0,0,0-2.269-.04l-11.547,97.014a3.423,3.423,0,0,1-3.4,3.016h-11.65a3.425,3.425,0,0,1-3.419-3.4c-.026-6.094-.067-12.232-.109-18.371-.37-54.677-.752-111.216,10.665-133.366l.1-.2,41.2-.7.1.226c12.465,27.239,8.682,88.092,5.023,146.94l-.352,5.671A3.426,3.426,0,0,1,729.894,661.7Z"
              transform="translate(-373.357 -247.036)"
              fill="#2f2e41"
            />
            <circle
              id="Ellipse_143"
              data-name="Ellipse 143"
              cx="18.672"
              cy="18.672"
              r="18.672"
              transform="translate(318.349 148.475)"
              fill="#a0616a"
            />
            <path
              id="Path_389"
              data-name="Path 389"
              d="M686.382,488.683l.515-21.408-3.7-16.7a26.924,26.924,0,0,1,5.987-23.657,26.515,26.515,0,0,1,22.214-9.21h0q.4.031.809.068a26.626,26.626,0,0,1,18.345,9.812,26.935,26.935,0,0,1,5.9,20.2l-4.481,39.164Z"
              transform="translate(-374.818 -225.93)"
              fill="#013f82"
            />
            <path
              id="Path_390"
              data-name="Path 390"
              d="M662.8,549.968a7.645,7.645,0,0,0,.4-11.715l10.513-25.05-13.875,2.606L651.988,539.2A7.686,7.686,0,0,0,662.8,549.969Z"
              transform="translate(-367.102 -248.847)"
              fill="#a0616a"
            />
            <path
              id="Path_391"
              data-name="Path 391"
              d="M768.3,553.741a7.645,7.645,0,0,1,.266-11.719L759.5,516.414l13.7,3.391,6.512,23.8A7.686,7.686,0,0,1,768.3,553.741Z"
              transform="translate(-393.272 -249.617)"
              fill="#a0616a"
            />
            <path
              id="Path_392"
              data-name="Path 392"
              d="M665.327,517.606a3.423,3.423,0,0,1-1.4-.3l-8-3.583a3.417,3.417,0,0,1-1.858-4.17l13.416-41.675,5.185-31.4a8.431,8.431,0,1,1,16.528,3.3l-7.88,33.672L668.6,515.182a3.419,3.419,0,0,1-3.273,2.423Z"
              transform="translate(-367.955 -228.759)"
              fill="#013f82"
            />
            <path
              id="Path_393"
              data-name="Path 393"
              d="M761.691,517.606a3.419,3.419,0,0,1-3.273-2.424L745.7,473.473l-7.887-33.7a8.431,8.431,0,1,1,16.528-3.3l5.2,31.452,13.4,41.62a3.417,3.417,0,0,1-1.858,4.17l-8,3.583A3.423,3.423,0,0,1,761.691,517.606Z"
              transform="translate(-388.021 -228.759)"
              fill="#013f82"
            />
            <path
              id="Path_394"
              data-name="Path 394"
              d="M712.351,357.832a11.028,11.028,0,0,0-14.062,5.8c-1.3,3.269-.906,6.957-.187,10.4s1.743,6.884,1.633,10.4-1.625,7.252-4.746,8.879c-1.865.972-4.046,1.081-6.067,1.661s-4.108,1.936-4.4,4.019c-.44,3.151,3.382,5.551,3.356,8.732-.027,3.371-4.239,5.372-4.785,8.7a5.774,5.774,0,0,0,2.227,5.131,15.131,15.131,0,0,0,5.234,2.534,90.322,90.322,0,0,0,45.048,2.567c2.979-.594,6.044-1.4,8.359-3.365s3.638-5.41,2.308-8.141c-1.995-4.094-8.327-4.327-10.534-8.31-1.324-2.389-.714-5.322-.436-8.04.72-7.017,2.381-15.215.637-22.05-1.575-6.176-4.995-14.156-9.883-18.246-3.507-2.935-10.2-1.6-14.686-.692Z"
              transform="translate(-374.946 -211.325)"
              fill="#2f2e41"
            />
            <path
              id="Path_395"
              data-name="Path 395"
              d="M837.072,734.049H570.991a.76.76,0,1,1,0-1.521h266.08a.76.76,0,1,1,0,1.521Z"
              transform="translate(-347.892 -301.434)"
              fill="#ccc"
            />
            <path
              id="Path_396"
              data-name="Path 396"
              d="M873.387,700.108c-10.962,14.681-33.718,16.226-33.718,16.226s-4.982-22.257,5.98-36.938,33.718-16.226,33.718-16.226S884.349,685.427,873.387,700.108Z"
              transform="translate(-412.225 -284.804)"
              fill="#e6e6e6"
            />
            <path
              id="Path_397"
              data-name="Path 397"
              d="M809.441,711.33c7.234,9.687,22.249,10.707,22.249,10.707s3.288-14.687-3.946-24.374S805.5,686.956,805.5,686.956,802.208,701.642,809.441,711.33Z"
              transform="translate(-404.123 -290.507)"
              fill="#e6e6e6"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default ContactContainer;
