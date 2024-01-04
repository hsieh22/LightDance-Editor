import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EditingLEDEffectCreateNestedOneWithoutUserInput } from "../inputs/EditingLEDEffectCreateNestedOneWithoutUserInput";
import { EditingPositionFrameCreateNestedOneWithoutUserInput } from "../inputs/EditingPositionFrameCreateNestedOneWithoutUserInput";

@TypeGraphQL.InputType("UserCreateWithoutEditingControlFrameIdInput", {
  isAbstract: true
})
export class UserCreateWithoutEditingControlFrameIdInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => EditingPositionFrameCreateNestedOneWithoutUserInput, {
    nullable: true
  })
  editingPositionFrameId?: EditingPositionFrameCreateNestedOneWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => EditingLEDEffectCreateNestedOneWithoutUserInput, {
    nullable: true
  })
  editingLEDEffectId?: EditingLEDEffectCreateNestedOneWithoutUserInput | undefined;
}
