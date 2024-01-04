import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LEDEffectCreateNestedOneWithoutEditingInput } from "../inputs/LEDEffectCreateNestedOneWithoutEditingInput";
import { UserCreateNestedOneWithoutEditingLEDEffectIdInput } from "../inputs/UserCreateNestedOneWithoutEditingLEDEffectIdInput";

@TypeGraphQL.InputType("EditingLEDEffectCreateInput", {
  isAbstract: true
})
export class EditingLEDEffectCreateInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutEditingLEDEffectIdInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutEditingLEDEffectIdInput;

  @TypeGraphQL.Field(_type => LEDEffectCreateNestedOneWithoutEditingInput, {
    nullable: true
  })
  editingLEDEffect?: LEDEffectCreateNestedOneWithoutEditingInput | undefined;
}
