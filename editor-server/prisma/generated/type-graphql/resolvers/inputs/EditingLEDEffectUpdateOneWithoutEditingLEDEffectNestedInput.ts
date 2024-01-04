import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EditingLEDEffectCreateOrConnectWithoutEditingLEDEffectInput } from "../inputs/EditingLEDEffectCreateOrConnectWithoutEditingLEDEffectInput";
import { EditingLEDEffectCreateWithoutEditingLEDEffectInput } from "../inputs/EditingLEDEffectCreateWithoutEditingLEDEffectInput";
import { EditingLEDEffectUpdateWithoutEditingLEDEffectInput } from "../inputs/EditingLEDEffectUpdateWithoutEditingLEDEffectInput";
import { EditingLEDEffectUpsertWithoutEditingLEDEffectInput } from "../inputs/EditingLEDEffectUpsertWithoutEditingLEDEffectInput";
import { EditingLEDEffectWhereUniqueInput } from "../inputs/EditingLEDEffectWhereUniqueInput";

@TypeGraphQL.InputType("EditingLEDEffectUpdateOneWithoutEditingLEDEffectNestedInput", {
  isAbstract: true
})
export class EditingLEDEffectUpdateOneWithoutEditingLEDEffectNestedInput {
  @TypeGraphQL.Field(_type => EditingLEDEffectCreateWithoutEditingLEDEffectInput, {
    nullable: true
  })
  create?: EditingLEDEffectCreateWithoutEditingLEDEffectInput | undefined;

  @TypeGraphQL.Field(_type => EditingLEDEffectCreateOrConnectWithoutEditingLEDEffectInput, {
    nullable: true
  })
  connectOrCreate?: EditingLEDEffectCreateOrConnectWithoutEditingLEDEffectInput | undefined;

  @TypeGraphQL.Field(_type => EditingLEDEffectUpsertWithoutEditingLEDEffectInput, {
    nullable: true
  })
  upsert?: EditingLEDEffectUpsertWithoutEditingLEDEffectInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => EditingLEDEffectWhereUniqueInput, {
    nullable: true
  })
  connect?: EditingLEDEffectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => EditingLEDEffectUpdateWithoutEditingLEDEffectInput, {
    nullable: true
  })
  update?: EditingLEDEffectUpdateWithoutEditingLEDEffectInput | undefined;
}
