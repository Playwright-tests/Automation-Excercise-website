import { ThumbnailType } from "../../enums/thumbnailType.spec";
import { BlogThumbnailGenerator } from "./blogThumbnailGenerator";
import { ProductThumbnailGenerator } from "./productThumbnailGenerator";
import { ThumbnailGenerator } from "./thumbnailGenerator";

export class ThumbnailProvider {

    static getGenerator(thumbnailType: ThumbnailType) : ThumbnailGenerator {

        switch (thumbnailType) {
            case ThumbnailType.Product:
                return new ProductThumbnailGenerator();
            case ThumbnailType.Blog:
                return new BlogThumbnailGenerator();
            default: 
                throw new Error('Could not find thumbnail with type: ' + thumbnailType);
        }
    }
}