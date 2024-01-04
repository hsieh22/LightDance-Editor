import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateOneRequiredWithoutEditingLEDEffectIdNestedInput } from "../inputs/UserUpdateOneRequiredWithoutEditingLEDEffectIdNestedInput";

@TypeGraphQL.InputType("EditingLEDEffectUpdateWithoutEditingLEDEffectInput", {
  isAbstract: true
})
export class EditingLEDEffectUpdateWithoutEditingLEDEffectInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutEditingLEDEffectIdNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutEditingLEDEffectIdNestedInput | undefined;
}
