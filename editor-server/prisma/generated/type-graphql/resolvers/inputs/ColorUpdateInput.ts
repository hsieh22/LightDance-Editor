import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ColorUpdatecolorCodeInput } from "../inputs/ColorUpdatecolorCodeInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ColorUpdateInput", {
  isAbstract: true
})
export class ColorUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  color?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ColorUpdatecolorCodeInput, {
    nullable: true
  })
  colorCode?: ColorUpdatecolorCodeInput | undefined;
}
