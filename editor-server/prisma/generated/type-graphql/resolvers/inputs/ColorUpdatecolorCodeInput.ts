import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ColorUpdatecolorCodeInput", {
  isAbstract: true
})
export class ColorUpdatecolorCodeInput {
  @TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
    nullable: true
  })
  set?: number[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
    nullable: true
  })
  push?: number[] | undefined;
}
