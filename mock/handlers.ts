import { MOCK_URL } from "@/constants/constant";
import { http, HttpResponse } from "msw";

// mocking할 api 설정
export const handlers = [
  http.get(`${MOCK_URL}/v1/products/:productId`, ({ params }) => {
    return HttpResponse.json({
      productId: 7,
      name: "여성티셔츠",
      description: "겨울 티셔츠",
      price: 3000,
      category: {
        productCategoryId: 8,
        name: "여성 의류",
        parentProductCategoryId: 2,
        subProductCategories: [],
      },
      provider: {
        providerId: 2,
        name: "FashionWorld",
        description: "모든 사람을 위한 스타일리시한 의류",
      },
      options: [
        {
          id: 1,
          name: "색상",
          optionDetails: [
            {
              value: "검정",
              quantity: 50,
              additionalPrice: 0,
              fileOrder: 1,
              url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
            },
            {
              value: "은색",
              quantity: 30,
              additionalPrice: 10000,
              fileOrder: 2,
              url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
            },
          ],
        },
      ],
      rating: 4.8,
    });
  }),
];
