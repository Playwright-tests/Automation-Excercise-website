import { ThumbnailType } from "../../enums/thumbnailType.spec";
import { BlogThumbnailGenerator } from "./blogThumbnailGenerator.spec";
import { ProductThumbnailGenerator } from "./productThumbnailGenerator.spec";
import { ThumbnailGenerator } from "./thumbnailGenerator.spec";

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