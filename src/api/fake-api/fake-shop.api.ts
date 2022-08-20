/* eslint-disable import/prefer-default-export,class-methods-use-this */

// application
import { IBrand } from "~/interfaces/brand";
import { IFilterValues, IListOptions, IReviewsList } from "~/interfaces/list";
import { IOrder } from "~/interfaces/order";
import { IProductsList, IProduct } from "~/interfaces/product";
import { IReview } from "~/interfaces/review";
import { IShopCategory } from "~/interfaces/category";
import {
    IAddProductReviewData,
    ICheckoutData,
    IGetBrandsOptions,
    IGetCategoriesOptions,
    IGetCategoryBySlugOptions,
    IGetSearchSuggestionsOptions,
    IGetSearchSuggestionsResult,
    ShopApi,
} from "~/api/base";
import {
    addProductReview,
    checkout,
    getCategories,
    getCategoryBySlug,
    getFeaturedProducts,
    getLatestProducts,
    getPopularProducts,
    getProductAnalogs,
    getProductBySlug,
    getProductReviews,
    getProductsList,
    getRelatedProducts,
    getSearchSuggestions,
    getSpecialOffers,
    getTopRatedProducts,
} from "~/fake-server/endpoints";
import axios from "axios";

export class FakeShopApi implements ShopApi {
    getCategoryBySlug(slug: string, options?: IGetCategoryBySlugOptions): Promise<IShopCategory> {
        console.log("HIT1");
        return getCategoryBySlug(slug, options);
    }

    getCategories(options?: IGetCategoriesOptions): Promise<IShopCategory[]> {
        console.log("HIT2");
        return getCategories(options);
    }

    async getBrands(options?: IGetBrandsOptions): Promise<IBrand[]> {
        console.log("HIT3");
        const response = await axios.get("/api/brands");
        const brands: IBrand[] = [];

        response.data.forEach((elem: IBrand) => brands.push(elem));

        return brands;
    }

    getProductsList(options: IListOptions = {}, filters: IFilterValues = {}): Promise<IProductsList> {
        console.log("HIT4");
        return getProductsList(options, filters);
    }

    getProductBySlug(slug: string): Promise<IProduct> {
        console.log("HIT5");
        return getProductBySlug(slug);
    }

    getProductReviews(productId: number, options?: IListOptions): Promise<IReviewsList> {
        console.log("HIT6");
        return getProductReviews(productId, options);
    }

    addProductReview(productId: number, data: IAddProductReviewData): Promise<IReview> {
        console.log("HIT7");
        return addProductReview(productId, data);
    }

    getProductAnalogs(productId: number): Promise<IProduct[]> {
        console.log("HIT8");
        return getProductAnalogs(productId);
    }

    getRelatedProducts(productId: number, limit: number): Promise<IProduct[]> {
        console.log("HIT9");
        return getRelatedProducts(productId, limit);
    }

    getFeaturedProducts(categorySlug: string | null, limit: number): Promise<IProduct[]> {
        console.log("HIT10");

        console.log(getFeaturedProducts(categorySlug, limit));

        return getFeaturedProducts(categorySlug, limit);
    }

    getPopularProducts(categorySlug: string | null, limit: number): Promise<IProduct[]> {
        console.log("HIT11");
        return getPopularProducts(categorySlug, limit);
    }

    getTopRatedProducts(categorySlug: string | null, limit: number): Promise<IProduct[]> {
        console.log("HIT12");
        return getTopRatedProducts(categorySlug, limit);
    }

    getSpecialOffers(limit: number): Promise<IProduct[]> {
        console.log("HIT13");
        return getSpecialOffers(limit);
    }

    getLatestProducts(limit: number): Promise<IProduct[]> {
        console.log("HIT14");
        return getLatestProducts(limit);
    }

    getSearchSuggestions(query: string, options?: IGetSearchSuggestionsOptions): Promise<IGetSearchSuggestionsResult> {
        console.log("HIT15");
        return getSearchSuggestions(query, options);
    }

    checkout(data: ICheckoutData): Promise<IOrder> {
        console.log("HIT16");
        return checkout(data);
    }
}
