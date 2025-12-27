import { Expose } from "class-transformer";
import ResponseDto from "src/core/infrastructure/models/ResponseDto";
import PostEntity from "src/post/domain/entities/PostEntity";

export default class PostDto extends ResponseDto<PostEntity> {
  @Expose()
  id?: number;

  @Expose()
  userId?: number;

  @Expose()
  title?: string;

  @Expose()
  body?: string;

  constructor(id = 0, userId = 0, title = "", body = "") {
    super();
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.body = body;
  }

  toDomain() {
    return {
      id: this.id,
      userId: this.userId,
      title: this.title,
      body: this.body,
    };
  }
}
