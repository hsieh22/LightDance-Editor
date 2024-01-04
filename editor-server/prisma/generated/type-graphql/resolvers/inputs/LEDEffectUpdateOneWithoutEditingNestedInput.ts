import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LEDEffectCreateOrConnectWithoutEditingInput } from "../inputs/LEDEffectCreateOrConnectWithoutEditingInput";
import { LEDEffectCreateWithoutEditingInput } from "../inputs/LEDEffectCreateWithoutEditingInput";
import { LEDEffectUpdateWithoutEditingInput } from "../inputs/LEDEffectUpdateWithoutEditingInput";
import { LEDEffectUpsertWithoutEditingInput } from "../inputs/LEDEffectUpsertWithoutEditingInput";
import { LEDEffectWhereUniqueInput } from "../inputs/LEDEffectWhereUniqueInput";

@TypeGraphQL.InputType("LEDEffectUpdateOneWithoutEditingNestedInput", {
  isAbstract: true
})
export class LEDEffectUpdateOneWithoutEditingNestedInput {
  @TypeGraphQL.Field(_type => LEDEffectCreateWithoutEditingInput, {
    nullable: true
  })
  create?: LEDEffectCreateWithoutEditingInput | undefined;

  @TypeGraphQL.Field(_type => LEDEffectCreateOrConnectWithoutEditingInput, {
    nullable: true
  })
  connectOrCreate?: LEDEffectCreateOrConnectWithoutEditingInput | undefined;

  @TypeGraphQL.Field(_type => LEDEffectUpsertWithoutEditingInput, {
    nullable: true
  })
  upsert?: LEDEffectUpsertWithoutEditingInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => LEDEffectWhereUniqueInput, {
    nullable: true
  })
  connect?: LEDEffectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LEDEffectUpdateWithoutEditingInput, {
    nullable: true
  })
  update?: LEDEffectUpdateWithoutEditingInput | undefined;
}
