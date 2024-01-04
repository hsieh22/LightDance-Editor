import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstEditingLEDEffectOrThrowArgs } from "./args/FindFirstEditingLEDEffectOrThrowArgs";
import { EditingLEDEffect } from "../../../models/EditingLEDEffect";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EditingLEDEffect)
export class FindFirstEditingLEDEffectOrThrowResolver {
  @TypeGraphQL.Query(_returns => EditingLEDEffect, {
    nullable: true
  })
  async findFirstEditingLEDEffectOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEditingLEDEffectOrThrowArgs): Promise<EditingLEDEffect | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).editingLEDEffect.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
