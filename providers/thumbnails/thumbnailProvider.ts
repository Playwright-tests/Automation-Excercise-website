import { ThumbnailType } from "../../enums/thumbnailType";
import { BlogThumbnailFactory } from "./blogThumbnailFactory";
import { ProductThumbnailFactory } from "./productThumbnailFactory";
import { ThumbnailFactory } from "./thumbnailFactory";

export class ThumbnailProvider {

    static getFactory(thumbnailType: ThumbnailType) : ThumbnailFactory {

        switch (thumbnailType) {
            case ThumbnailType.Product:
                return new ProductThumbnailFactory();
            case ThumbnailType.Blog:
                return new BlogThumbnailFactory();
            default: 
                throw new Error('Could not find thumbnail with type: ' + thumbnailType);
        }
    }
}