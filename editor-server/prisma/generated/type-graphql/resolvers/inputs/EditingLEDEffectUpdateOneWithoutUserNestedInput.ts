import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EditingLEDEffectCreateOrConnectWithoutUserInput } from "../inputs/EditingLEDEffectCreateOrConnectWithoutUserInput";
import { EditingLEDEffectCreateWithoutUserInput } from "../inputs/EditingLEDEffectCreateWithoutUserInput";
import { EditingLEDEffectUpdateWithoutUserInput } from "../inputs/EditingLEDEffectUpdateWithoutUserInput";
import { EditingLEDEffectUpsertWithoutUserInput } from "../inputs/EditingLEDEffectUpsertWithoutUserInput";
import { EditingLEDEffectWhereUniqueInput } from "../inputs/EditingLEDEffectWhereUniqueInput";

@TypeGraphQL.InputType("EditingLEDEffectUpdateOneWithoutUserNestedInput", {
  isAbstract: true
})
export class EditingLEDEffectUpdateOneWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => EditingLEDEffectCreateWithoutUserInput, {
    nullable: true
  })
  create?: EditingLEDEffectCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => EditingLEDEffectCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: EditingLEDEffectCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => EditingLEDEffectUpsertWithoutUserInput, {
    nullable: true
  })
  upsert?: EditingLEDEffectUpsertWithoutUserInput | undefined;

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

  @TypeGraphQL.Field(_type => EditingLEDEffectUpdateWithoutUserInput, {
    nullable: true
  })
  update?: EditingLEDEffectUpdateWithoutUserInput | undefined;
}
